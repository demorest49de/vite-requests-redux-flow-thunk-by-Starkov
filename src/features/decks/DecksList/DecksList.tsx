import s from './DecksList.module.css'
import { useEffect } from 'react'
import { deckApi } from '../decks-api.ts'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { setDecksAC } from '../decks-reducer.ts'
import { fetchDecksTC } from '../decks-selectors.ts'

export const DecksList = () => {
  const decks = useAppSelector((state) => state.decksReducer.decks)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [])
  console.log(' decks: ', decks)
  return (
    <ul className={s.list}>
      {decks.map((deck) => {
        return <DeckItem deck={deck} key={deck.id} />
      })}
    </ul>
  )
}
