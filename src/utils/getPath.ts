import { PATHS } from '@/lib/constants/'

export const getPath = (pathKey: keyof typeof PATHS, ...args: string[]): string => {
	const val = PATHS[pathKey]

	if (!args.length) {
		return val
	}

	const newPath = val.replace(/\[(\d+)\]/g, (_, num) => {
		const arg = args.shift()
		return arg != null ? arg : num
	})

	return `/${newPath.split('/').filter(Boolean).join('/')}`
}
