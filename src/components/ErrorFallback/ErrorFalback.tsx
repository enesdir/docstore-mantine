import type { FallbackProps } from 'react-error-boundary'

export const ErrorFallback = ({ error }: FallbackProps) => (
  <div>
    <p>Something went wrong:</p>
    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
    <pre>{error.message}</pre>
  </div>
)
