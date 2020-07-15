# use-flash-state

> A React hook to set state on a timer. Great for showing flash messages!

[![NPM](https://img.shields.io/npm/v/use-flash-state.svg)](https://www.npmjs.com/package/use-flash-state) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-flash-state
```

## Usage

```jsx
import React from 'react'

import {useFlashState} from 'use-flash-state'

import {Banner, Button, Form} from '@benderthecrime/components'

const Example = () => {
  const [{showSuccessMessage}, setFlashState] = useFlashState({showSuccessMessage: false})

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
```

## License

MIT © [@benderTheCrime](https://github.com/@benderTheCrime)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
