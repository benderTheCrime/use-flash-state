import React from 'react'

import {useFlashState} from 'use-flash-state'

import {Banner, Button, Form} from '@benderthecrime/components'

export const App = () => {
  const [{showSuccessMessage}, setFlashState] = useFlashState({showSuccessMessage: false}, 2000)

  return <Form
    onSubmit={(e) => {
      e.preventDefault()
      // ...
      setFlashState({showSuccessMessage: true})
    }}
  >
    <Banner open={showSuccessMessage} type="success">Success</Banner>
    <Button type="submit">Submit</Button>
  </Form>
}

export default App
