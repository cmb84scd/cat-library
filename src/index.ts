import { MusicLibrary } from './musicLibrary'

const musicLibrary = new MusicLibrary()
musicLibrary.add('Country', 'Top band', 'Best dances', 12, 60)
console.log(musicLibrary.items)
