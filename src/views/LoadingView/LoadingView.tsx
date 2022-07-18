import { FC } from 'react'
import { Spin } from 'antd'

interface LoadingViewProps {
  text?: string
}

export const LoadingView: FC<LoadingViewProps> = ({ text }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Spin tip={text ? text : 'Loading'} />
    </div>
  )
}
