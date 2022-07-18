import { render, screen } from '../../testSetup'
import { ErrorBoundaryFallbackView } from './ErrorBoundaryFallbackView'

const mockresetErrorBoundary = jest.fn()
const mockError = {
  name: 'callstack size exceeded',
  message: 'too many rerenders!',
}

describe('ErrorBoundaryFallbackView', () => {
  it('renders a general err message', () => {
    render(
      <ErrorBoundaryFallbackView
        error={mockError}
        resetErrorBoundary={mockresetErrorBoundary}
      />
    )

    const message = screen.getByText('Something went wrong!')
    expect(message).toBeInTheDocument()
  })

  it('renders the message from Error', () => {
    render(
      <ErrorBoundaryFallbackView
        error={mockError}
        resetErrorBoundary={mockresetErrorBoundary}
      />
    )

    const passedMessage = screen.getByText('too many rerenders!')
    expect(passedMessage).toBeInTheDocument()
  })

  it('renders reset button and fires reset cb on click', () => {
    render(
      <ErrorBoundaryFallbackView
        error={mockError}
        resetErrorBoundary={mockresetErrorBoundary}
      />
    )

    const button = screen.getByTestId('error_boundary_reset_button')
    expect(button).toBeTruthy()

    button.click()
    expect(mockresetErrorBoundary).toHaveBeenCalled()
  })
})
