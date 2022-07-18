import { render, screen } from '../../testSetup'
import { ErrorView } from './ErrorView'

describe('ErrorView', () => {
  it('renders a default err message', () => {
    render(<ErrorView />)

    const defaultMessage = screen.getByText('Something went wrong!')
    expect(defaultMessage).toBeInTheDocument()
  })

  it('renders passed error message', () => {
    render(<ErrorView message="error happened" />)

    const customMessage = screen.getByText('error happened')
    expect(customMessage).toBeInTheDocument()
  })
})
