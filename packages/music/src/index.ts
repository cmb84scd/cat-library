import { listByGenre, listByTitles } from '@cat/utils'

import { MusicLibrary } from './music_library'

const musicLibrary = new MusicLibrary()
musicLibrary.add({
  genre: 'Country',
  artist: 'Top band',
  title: 'Top country hits',
  tracks: 12,
  length: 60,
})
musicLibrary.add({
  genre: 'Country',
  artist: 'Top band',
  title: 'Classic country',
  tracks: 12,
  length: 60,
})
musicLibrary.add({
  genre: 'Dance',
  artist: 'Dance band',
  title: 'Best dances',
  tracks: 12,
  length: 60,
})
musicLibrary.add({
  genre: 'Jazz',
  artist: 'JazziB',
  title: 'Top jazz hits',
  tracks: 12,
  length: 60,
})
// musicLibrary.add('Dance', 'Dance band', 'Favourite dances', 12, 60)
// musicLibrary.add('Jazz', 'JazziB', 'Classic jazz', 12, 60)
console.log(musicLibrary.items)
console.log(listByTitles(musicLibrary.items))
console.log(musicLibrary.listByArtist('JazziB'))
console.log(listByGenre('Country', 'albums', musicLibrary.items))
