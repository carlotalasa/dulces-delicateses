import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import { useEffect, useState } from 'react'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

export const useReloadReduxState = (
  slice: keyof RootState,
  action: ActionCreatorWithPayload<any>
): boolean => {
  const [status, setStatus] = useState<'initial' | 'loading' | 'loaded'>(
    'initial'
  )
  const dispatch = useDispatch()
  const state = useSelector((state: RootState) => state[slice])

  useEffect(() => {
    if (status !== 'loaded') return

    localStorage.setItem(slice as string, JSON.stringify(state))
  }, [status, state, slice])

  useEffect(() => {
    if (status !== 'initial') return
    setStatus('loading')
    const newState = localStorage.getItem(slice as string)

    if (newState) {
      const stateToSet = JSON.parse(newState)
      dispatch(action(stateToSet))
    }
    setStatus('loaded')
  }, [action, status, dispatch, slice])

  return status === 'loaded'
}

export const clearSavedSlice = (slice: keyof RootState) =>
  localStorage.removeItem(slice as string)
