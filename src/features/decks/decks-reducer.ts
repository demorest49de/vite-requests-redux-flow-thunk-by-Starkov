import { DeckItemType } from './decks-api'

const initialState = {
  decks: [] as Array<DeckItemType>,
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS': {
      return { ...state, decks: action.decks }
    }
    default:
      return state
  }
}

export type SetDecksAT = ReturnType<typeof setDecksAC>
type DecksActions = SetDecksAT

export const setDecksAC = (decks: Array<DeckItemType>) => {
  return {
    type: 'SET-DECKS' as const,
    decks,
  }
}
