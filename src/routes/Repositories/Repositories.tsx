import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar, List, Skeleton } from 'antd'
import useFetchData from 'hooks/useFetchData'
import { ErrorView, NoDataView } from 'views'
import { apiGoDaddyRepos } from 'api/config'
import { ReposApiResponse } from 'api/types'

export const Repositories: FC = () => {
  const { data, error } = useFetchData<ReposApiResponse>(apiGoDaddyRepos)
  const navigate = useNavigate()

  if (error) return <ErrorView />
  if (data && !data.length) return <NoDataView callback={() => navigate('/')} />

  return (
    <List
      loading={!data && !error}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(repo) => (
        <List.Item actions={[<a href={repo.name}>Repo Details</a>]}>
          <Skeleton avatar title={false} loading={!repo} active>
            <List.Item.Meta
              avatar={<Avatar src={repo.owner.avatar_url} />}
              title={<a href={repo.name}>{repo.name}</a>}
              description={repo.description}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  )
}
