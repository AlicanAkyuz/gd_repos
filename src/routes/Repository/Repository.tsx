import { FC } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Descriptions, Tag } from 'antd'
import useFetchData from 'hooks/useFetchData'
import { ErrorView, LoadingView, NoDataView } from 'views'
import { apiGoDaddySingleRepo } from 'api/config'
import { Repo, RepoLanguages } from 'api/types'

export const Repository: FC = () => {
  const { repositoryName } = useParams()

  const url = `${apiGoDaddySingleRepo}${repositoryName}`
  const { data, error } = useFetchData<Repo>(url)
  const navigate = useNavigate()

  if (data && !data.id)
    return <NoDataView callback={() => navigate(repositoryName || '/')} />
  if (error) return <ErrorView />
  if (!data) return <LoadingView />

  return (
    <Descriptions column={2} title={data.full_name} bordered>
      <Descriptions.Item label="Title:">{data.full_name}</Descriptions.Item>
      <Descriptions.Item label="Description:">
        {data.description}
      </Descriptions.Item>
      <Descriptions.Item label="Github page:">
        <a data-testid="anchor_to_repo_page" href={data.html_url}>
          {data.html_url}
        </a>
      </Descriptions.Item>

      <Descriptions.Item label="Forks count:">
        <Tag color="volcano">{data.forks_count}</Tag>
      </Descriptions.Item>
      <Descriptions.Item label="Open issues count:">
        <Tag color="volcano">{data.open_issues_count}</Tag>
      </Descriptions.Item>
      <Descriptions.Item label="Watchers count:">
        <Tag color="volcano">{data.watchers_count}</Tag>
      </Descriptions.Item>

      <Descriptions.Item label="Languages:">
        <Languages url={data.languages_url} language={data.language} />
      </Descriptions.Item>
    </Descriptions>
  )
}

const Languages: FC<{
  url: string
  language: string
}> = ({ url, language }) => {
  const { data, error } = useFetchData<RepoLanguages>(url)

  if (!data) return <LoadingView />
  if (error) return <Tag color="geekblue">{language}</Tag>

  return (
    <>
      {Object.keys(data).map((lang) => (
        <Tag key={lang} color="geekblue">
          {lang}
        </Tag>
      ))}
    </>
  )
}
