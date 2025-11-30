import { generateMockEntry } from 'entities/log-entry/model/mock'
import type { MockEntry } from 'entities/log-entry/model/types'
import { useEffect, useState } from 'react'

export const useSimulation = () => {
	const [isPaused, setIsPaused] = useState(false)
	const [entries, setEntries] = useState<MockEntry[]>([])

	useEffect(() => {
		if (isPaused) return

		const interval = setInterval(() => {
			if (entries.length > 50) {
				setEntries(prev => prev.slice(0, 49))
			}

			const newEntry = generateMockEntry()
			setEntries(prev => [newEntry, ...prev])
		}, 1500)

		return () => clearInterval(interval)
	}, [isPaused, entries.length])

	return {
		entries,
		isPaused,
		setIsPaused,
		clearEntries: () => setEntries([]),
	}
}
