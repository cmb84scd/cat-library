import { MusicLibrary } from './musicLibrary'

const musicLibrary = new MusicLibrary()
musicLibrary.add('Country', 'Top band', 'Top country hits', 12, 60)
musicLibrary.add('Country', 'Top band', 'Classic country', 12, 60)
musicLibrary.add('Dance', 'Dance band', 'Best dances', 12, 60)
musicLibrary.add('Jazz', 'JazziB', 'Top jazz hits', 12, 60)
musicLibrary.add('Dance', 'Dance band', 'Favourite dances', 12, 60)
musicLibrary.add('Jazz', 'JazziB', 'Classic jazz', 12, 60)
console.log(musicLibrary.items)
console.log(musicLibrary.list_titles())
