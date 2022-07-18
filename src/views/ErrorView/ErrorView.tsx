import { FC } from 'react'
import { Typography } from 'antd'

export const ErrorView: FC<{
  message?: string
}> = ({ message }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Typography>{message ? message : 'Something went wrong!'}</Typography>
    </div>
  )
}
