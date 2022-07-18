import { render, screen } from '../../testSetup'
import { Repository } from './Repository'
import useFetchData from '../../hooks/useFetchData'
import { useParams } from 'react-router-dom'
import { apiGoDaddySingleRepo } from '../../api/config'

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(() => {
    return {
      repositoryName: 'cool_repo',
    }
  }),
  useNavigate: jest.fn(() => ({
    navigate: jest.fn(),
  })),
}))

jest.mock('../../hooks/useFetchData')

const mockApiResponse = {
  id: 1,
  full_name: 'cool_repo_with_cool_code',
  description: 'a repo with cool code',
  html_url: 'some url',
  forks_count: 1,
  open_issues_count: 2,
  watchers_count: 3,
  language: 'javascript',
  languages_url: 'some languages url',
}

describe('Repository', () => {
  const mockRepoName = 'cool_repo'

  beforeEach(() => {
    ;(useParams as jest.Mock).mockImplementation(() => {
      return {
        repositoryName: mockRepoName,
      }
    })
  })

  it('gets repo name from the params and calls correct endpoint with it', () => {
    ;(useFetchData as jest.Mock).mockImplementation(() => {
      return {
        data: [],
        error: undefined,
      }
    })

    render(<Repository />)

    expect(useFetchData).toHaveBeenCalledWith(
      `${apiGoDaddySingleRepo}${mockRepoName}`
    )
  })

  it('when api returns no data, renders no data found message', () => {
    ;(useFetchData as jest.Mock).mockImplementation(() => {
      return {
        data: {},
        error: undefined,
      }
    })

    render(<Repository />)

    const noDataMessage = screen.getByText('No Data Found!')

    expect(noDataMessage).toBeInTheDocument()
  })

  it('when error happens, renders error message', async () => {
    ;(useFetchData as jest.Mock).mockImplementation(() => {
      return {
        data: undefined,
        error: true,
      }
    })

    render(<Repository />)

    const noDataMessage = screen.getByText('Something went wrong!')

    expect(noDataMessage).toBeInTheDocument()
  })

  describe('with data', () => {
    beforeEach(() => {
      ;(useFetchData as jest.Mock).mockImplementation(() => {
        return {
          data: mockApiResponse,
          error: undefined,
        }
      })
    })

    it('renders repo full name and description', () => {
      render(<Repository />)

      const repoFullName = screen.getAllByText(mockApiResponse.full_name)[0]
      const repoDescription = screen.getByText(mockApiResponse.description)

      expect(repoFullName).toBeInTheDocument()
      expect(repoDescription).toBeInTheDocument()
    })

    it('renders fork, open issues and watcher counts', () => {
      render(<Repository />)

      const repoForksCount = screen.getByText(mockApiResponse.forks_count)
      const repoOpenIssuesCount = screen.getByText(
        mockApiResponse.open_issues_count
      )
      const repoWatchersCount = screen.getByText(mockApiResponse.watchers_count)

      expect(repoForksCount).toBeInTheDocument()
      expect(repoOpenIssuesCount).toBeInTheDocument()
      expect(repoWatchersCount).toBeInTheDocument()
    })

    it.todo('renders all available languages of the')
  })
})
