import { DeckItemType } from './decks-api'
import { act } from 'react-dom/test-utils'

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
    case 'ADD-DECK': {
      return { ...state, decks: [action.deck, ...state.decks] }
    }
    default:
      return state
  }
}

export type SetDecksAT = ReturnType<typeof setDecksAC>

export const setDecksAC = (decks: Array<DeckItemType>) => {
  return {
    type: 'SET-DECKS' as const,
    decks: decks,
  }
}

export type AddDeckAT = ReturnType<typeof addDeckAC>
export const addDeckAC = (deck: DeckItemType) => {
  return {
    type: 'ADD-DECK' as const,
    deck: deck,
  }
}

export type DecksActions = SetDecksAT | AddDeckAT
