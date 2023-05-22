'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class Playlist {
  constructor(name, songs = []) {
    this.name = name;
    this.songs = songs;
  }
  addSong(song) {
    this.songs.push(song);
  }
  removeSong(song) {
    const removedSongs = this.songs.filter((_song) => _song !== song);
    this.songs = removedSongs;
  }
  play() {
    return `${this.name} 再生中：${this.songs[0]}`;
  }
}
exports.default = Playlist;
const myPlaylist = new Playlist('お気に入りリスト');
myPlaylist.addSong('Lemon');
myPlaylist.addSong('花束');
console.log(myPlaylist.play());
myPlaylist.removeSong('Lemon');
console.log(myPlaylist.play());
//# sourceMappingURL=main.js.map
