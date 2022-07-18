import { FC } from 'react'
import { Button, Typography } from 'antd'

export const ErrorBoundaryFallbackView: FC<{
  error: Error
  resetErrorBoundary: () => void
}> = ({ error, resetErrorBoundary }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Typography.Title>Something went wrong!</Typography.Title>
      <Typography>{error.message}</Typography>
      <Button
        data-testid="error_boundary_reset_button"
        onClick={resetErrorBoundary}
      >
        Try again
      </Button>
    </div>
  )
}
