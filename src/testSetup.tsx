import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
// import '@testing-library/jest-dom'

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    }
  }

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: BrowserRouter, ...options })

export * from '@testing-library/react'
export { customRender as render }
