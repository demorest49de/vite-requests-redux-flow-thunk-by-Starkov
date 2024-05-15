import s from './DecksList.module.css'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { fetchDecksTC } from '../decks-selectors.ts'

export const DecksList = () => {
  const decks = useAppSelector((state) => state.decksReducer.decks)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [dispatch])
  console.log(' decks: ', decks)
  return (
    <ul className={s.list}>
      {decks.map((deck) => {
        return <DeckItem deck={deck} key={deck.id} />
      })}
    </ul>
  )
}
