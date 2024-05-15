import { ItemsType } from './decks-api'

const initialState = {
  decks: [] as Array<ItemsType>,
  searchParams: {
    name: '',
  },
}


type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS': {
      return {...state, decks: action.decks};
    }
    default:
      return state
  }
}

export type SetDecksAT = ReturnType<typeof setDecksAC>
type DecksActions = SetDecksAT;

export const setDecksAC = (decks: Array<ItemsType>) => {
  return { type: 'SET-DECKS', decks } as const
}