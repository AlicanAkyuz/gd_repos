import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from 'antd'

const { Header, Content } = Layout

export const LayoutProvider: FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <Layout>
      <Header>
        <Link
          style={{
            display: 'block',
            color: '#fff',
            fontSize: '1.5rem',
          }}
          to={'/'}
        >
          GoDaddy Repos
        </Link>
      </Header>
      <Content
        style={{
          backgroundColor: '#fff',
          height: '100vh',
          padding: '20px 30px',
        }}
      >
        {children}
      </Content>
    </Layout>
  )
}
