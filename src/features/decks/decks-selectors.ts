import { deckApi } from './decks-api.ts'
import { setDecksAC } from './decks-reducer.ts'
import { AppDispatch } from '../../app/store.ts'

export const fetchDecksTC = () => {
  return (dispatch: AppDispatch) => {
    deckApi.getDecks().then((decks) => {
      console.log(' decks: ', decks)
      dispatch(setDecksAC(decks.data.items))
    })
  }
}
