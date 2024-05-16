import { AppDispatch } from '../../app/store.ts'
import { deckApi } from './decks-api.ts'
import { addDeckAC, setDecksAC } from './decks-reducer.ts'
// import { addDeckAC } from './decks-reducer.ts'

export const fetchDecksTC = () => {
  return (dispatch: AppDispatch) => {
    deckApi.getDecks().then((decks) => {
      dispatch(setDecksAC(decks.data.items))
    })
  }
}

export const addDeckTC = (title: string) => async (dispatch: AppDispatch) => {
  return deckApi.addDeck(title)
    .then(res => {
      console.log(' res: ', res.data)
      dispatch(addDeckAC(res.data))
    })
}
