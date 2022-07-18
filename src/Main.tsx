import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { errorLogger } from 'utils/errorLogger'
import { Repositories } from 'routes'
import { ErrorBoundaryFallbackView } from 'views'

export const Main: FC = () => {
  const navigate = useNavigate()

  return (
    <ErrorBoundary
      FallbackComponent={ErrorBoundaryFallbackView}
      onError={errorLogger}
      onReset={() => navigate('/')}
    >
      <Repositories />
    </ErrorBoundary>
  )
}
