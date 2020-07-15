import {act, renderHook} from '@testing-library/react-hooks'

import {useFlashState} from './'

jest.useFakeTimers()

describe('useFlashState', () => {
  it('updates and then resets after one second', () => {
    const {result} = renderHook(() => useFlashState({showSuccessMessage: false}, 1000))

    const [, setFlashState] = result.current

    expect(result.current).toEqual([{showSuccessMessage: false}, expect.any(Function)])

    act(() => setFlashState({showSuccessMessage: true}))
    expect(result.current).toEqual([{showSuccessMessage: true}, expect.any(Function)])

    act(() => jest.advanceTimersByTime(1000))
    expect(result.current).toEqual([{showSuccessMessage: false}, expect.any(Function)])
  })
})
