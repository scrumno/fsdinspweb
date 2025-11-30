const PACKAGE_NAME = '@scrumno/d-insp-react'

export const fetchPackageVersion = async (): Promise<string> => {
	try {
		const response = await fetch(
			`https://registry.npmjs.org/${PACKAGE_NAME}/latest`
		)

		if (!response.ok) {
			throw new Error('Network response was not ok')
		}
		const data: { version: string } = await response.json()

		return data.version
	} catch (error) {
		console.error('Failed to fetch package version:', error)
		return '1.0.0'
	}
}
