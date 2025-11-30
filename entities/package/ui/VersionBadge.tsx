import { useLatestVersion } from '../model/useLatestVersion'

export const VersionBadge = () => {
	const { version, isLoading } = useLatestVersion()

	const displayVersion = isLoading ? '...' : `v${version}`

	return (
		<div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-mono border border-brand-green/20'>
			<span className='relative flex h-2 w-2'>
				<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75'></span>
				<span className='relative inline-flex rounded-full h-2 w-2 bg-brand-green'></span>
			</span>
			Stable Release {displayVersion}
		</div>
	)
}
