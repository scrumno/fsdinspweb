import { useEffect, useState } from 'react'
import { fetchPackageVersion } from '../api'

export const useLatestVersion = () => {
	const [version, setVersion] = useState<string | null>(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		let isMounted = true

		fetchPackageVersion().then(ver => {
			if (isMounted) {
				setVersion(ver)
				setIsLoading(false)
			}
		})

		return () => {
			isMounted = false
		}
	}, [])

	return { version, isLoading }
}
