import { render, screen } from '../../testSetup'
import { NoDataView } from './NoDataView'

const mockCallback = jest.fn()

describe('NoDataView', () => {
  it('renders a default no text message', () => {
    render(<NoDataView />)

    const noTextMessage = screen.getByText('No Data Found!')
    expect(noTextMessage).toBeInTheDocument()
  })

  it('renders passed text', () => {
    render(<NoDataView text="could not find data" />)

    const passedMessage = screen.getByText('could not find data')
    expect(passedMessage).toBeInTheDocument()
  })

  it('renders a button and fires callback on click when cb passed', () => {
    render(<NoDataView callback={mockCallback} />)

    const button = screen.getByTestId('no_data_view_button')
    expect(button).toBeTruthy()

    button.click()
    expect(mockCallback).toHaveBeenCalled()
  })
})
