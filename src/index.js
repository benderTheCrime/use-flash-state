import {useState} from 'react'

export const useFlashState = (initialState, timeout = 2E3) => {
  const [state, setState] = useState(initialState)

  const dispatch = (flashState) => {
    setTimeout(setState, timeout, state)
    setState(flashState)
  }

  return [state, dispatch]
}
