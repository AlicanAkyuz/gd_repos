import { render, screen } from '../../testSetup'
import { Repositories } from './Repositories'
import useFetchData from '../../hooks/useFetchData'

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(() => ({
    navigate: jest.fn(),
  })),
}))

jest.mock('../../hooks/useFetchData')

const mockApiResponse = [
  {
    id: 1,
    name: 'cool_repo',
    owner: { avatar_url: 'cool_photo' },
    description: 'a repo with cool code',
  },
  {
    id: 2,
    name: 'another_cool_repo',
    owner: { avatar_url: 'another_cool_photo' },
    description: 'another repo with cool code',
  },
]

describe('Repositories', () => {
  it('when api returns no data, renders no data found message', () => {
    ;(useFetchData as jest.Mock).mockImplementation(() => {
      return {
        data: [],
        error: undefined,
      }
    })

    render(<Repositories />)

    const noDataMessage = screen.getByText('No Data Found!')

    expect(noDataMessage).toBeInTheDocument()
  })

  it('when error happens, renders error message', () => {
    ;(useFetchData as jest.Mock).mockImplementation(() => {
      return {
        data: [],
        error: true,
      }
    })

    render(<Repositories />)

    const errorMessage = screen.getByText('Something went wrong!')

    expect(errorMessage).toBeInTheDocument()
  })

  describe('with data', () => {
    it('pulls repos and renders each repo name and description', () => {
      ;(useFetchData as jest.Mock).mockImplementation(() => {
        return {
          data: mockApiResponse,
          error: undefined,
        }
      })

      render(<Repositories />)

      const firstRepoName = screen.getByText('cool_repo')
      const secondRepoName = screen.getByText('another_cool_repo')

      expect(firstRepoName).toBeInTheDocument()
      expect(secondRepoName).toBeInTheDocument()

      const firstRepoDes = screen.getByText('a repo with cool code')
      const secondRepoDes = screen.getByText('another repo with cool code')

      expect(firstRepoDes).toBeInTheDocument()
      expect(secondRepoDes).toBeInTheDocument()
    })

    it.todo('directs to the respective repo when clicked')
  })
})
