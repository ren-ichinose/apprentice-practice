import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import PrismaModule from 'src/prisma/prisma.module';
import TodosService from 'src/todos/todos.service';
import TodosController from 'src/todos/todos.controller';
import { APP_PIPE } from '@nestjs/core';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [
        TodosService,
        {
          provide: APP_PIPE,
          useClass: ValidationPipe,
        },
      ],
      controllers: [TodosController],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ todo (GET)', () => {
    return request(app.getHttpServer()).get('/todos').expect(200);
  });

  it('/todos (POST) should return 400 if title is empty', () => {
    return request(app.getHttpServer())
      .post('/todos')
      .send({
        todo: {
          title: '',
        },
      })
      .expect(400);
  });

  it('/todos (POST) should return 201 if title is not empty', () => {
    return request(app.getHttpServer())
      .post('/todos')
      .send({
        todo: {
          title: 'test_ToDo',
        },
      })
      .expect(201);
  });
});
