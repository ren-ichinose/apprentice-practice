export default class Playlist {
  constructor(private readonly name: string, private songs: string[] = []) {}

  addSong(song: string): void {
    this.songs.push(song);
  }

  removeSong(song: string): void {
    const removedSongs = this.songs.filter((_song) => _song !== song);
    this.songs = removedSongs;
  }

  play(): string {
    return `${this.name} 再生中：${this.songs[0]}`;
  }
}

const myPlaylist = new Playlist('お気に入りリスト');
myPlaylist.addSong('Lemon');
myPlaylist.addSong('花束');
console.log(myPlaylist.play()); // 再生中: Lemon
myPlaylist.removeSong('Lemon');
console.log(myPlaylist.play()); // 再生中：花束
