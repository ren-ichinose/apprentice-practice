import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { Article, User } from '@prisma/client';
import CreateArticleDto from './dto/create-article.dto';
import ResponseArticle from './interfaces/article.interface';
import UpdateArticleDto from './dto/update-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

  async getSingle(slug: string): Promise<ResponseArticle> {
    const getedArticle = await this.getArticleDataBySlug(slug);
    if (!getedArticle)
      throw new NotFoundException('ページが見つかりませんでした');

    const getedUser = await this.userService.getByid(getedArticle.userId);
    if (!getedUser)
      throw new BadRequestException('ページが見つかりませんでした');

    const article = this.buildResponseArticleData(getedArticle, getedUser);
    return article;
  }

  async create(
    createArticleDto: CreateArticleDto,
    email: string,
  ): Promise<ResponseArticle> {
    const getedUser = await this.userService.getByEmail(email);
    if (!getedUser)
      throw new BadRequestException('アカウントを確認してください');

    const { title, description, body, tagList } = createArticleDto;
    const { id: userId } = getedUser;
    const slug = this.createSlug(title);

    const createdArticle = await this.prisma.article.create({
      data: { slug, title, description, body, userId },
    });

    const article = this.buildResponseArticleData(
      createdArticle,
      getedUser,
      undefined,
      tagList,
    );

    return article;
  }

  async update(
    updateArticleDto: UpdateArticleDto,
    slug: string,
    userId: number,
  ): Promise<ResponseArticle> {
    const getedArticle = await this.getArticleDataBySlug(slug);
    if (!getedArticle || getedArticle.userId !== userId)
      throw new ForbiddenException('更新ができませんでした');

    const getedUser = await this.userService.getByid(getedArticle.userId);
    if (!getedUser)
      throw new BadRequestException('ページが見つかりませんでした');

    const updatedSlug = this.createSlug(getedArticle.title);

    const updatedArticle = await this.prisma.article.update({
      where: { id: getedArticle.id },
      data: { ...updateArticleDto, slug: updatedSlug },
    });

    const article = this.buildResponseArticleData(updatedArticle, getedUser);
    return article;
  }

  async delete(slug: string, userId: number): Promise<void> {
    const getedArticle = await this.getArticleDataBySlug(slug);

    if (!getedArticle || getedArticle.userId !== userId)
      throw new ForbiddenException('削除ができませんでした');

    await this.prisma.article.delete({ where: { slug } });
  }

  private async getArticleDataBySlug(slug: string): Promise<Article | null> {
    const getedArticle = await this.prisma.article.findUnique({
      where: { slug },
    });
    return getedArticle;
  }

  private buildResponseArticleData(
    articleData: Article,
    authorData: Omit<User, 'created_at' | 'updated_at'>,
    slugData?: string,
    tagListData?: string[],
  ): ResponseArticle {
    const { id, userId, slug, ...rest } = articleData;
    const { username, bio, image } = authorData;

    const author = {
      username,
      bio,
      image,
      following: false,
    };

    const article = {
      ...rest,
      slug: slugData || slug,
      tagList: tagListData || [],
      favorited: false,
      favoritesCount: 0,
      author,
    };

    return article;
  }

  private createSlug(title: string): string {
    const cleanedTitle = title.toLowerCase().replace(/\s+/g, '-');
    const validSlug = cleanedTitle.replace(/[^a-z0-9-]/g, '');
    return validSlug;
  }
}
