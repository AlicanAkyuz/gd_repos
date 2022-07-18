import { render, screen } from 'testSetup'
import { LoadingView } from './LoadingView'

describe('LoadingView', () => {
  it('renders loading message by default', () => {
    render(<LoadingView />)

    const loadingMEssage = screen.getByText('Loading')
    expect(loadingMEssage).toBeInTheDocument()
  })

  it('renders passed message', () => {
    render(<LoadingView text="updating" />)

    const customMessage = screen.getByText('updating')
    expect(customMessage).toBeInTheDocument()
  })
})
