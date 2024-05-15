import axios from 'axios'

const _API_VERSION = '/v1'
export const instance = axios.create({
  baseURL: `https://api.flashcards.andrii.es${_API_VERSION}`,
  headers: {
    'x-auth-skip': true,
  },
})

export const deckApi = {
  getDecks: () => instance.get<DeckTypeDTO>('/decks'),
}

type AuthorType = {
  id: string
  name: string
}

export type DeckItemType = {
  author: AuthorType
  id: string
  userId: string
  name: string
  isPrivate: true
  cover: string
  created: string
  updated: string
  cardsCount: number
}

type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type  DeckTypeDTO = {
  'items': Array<DeckItemType>,
  'pagination': PaginationType
}