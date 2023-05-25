import type { FallbackProps } from 'react-error-boundary'

export const ErrorFallback = ({ error }: FallbackProps) => (
	<div>
		<p>Something went wrong:</p>
		<pre>{error.message}</pre>
	</div>
)
