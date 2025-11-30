export type EntryType = 'fetch' | 'render' | 'value'

export interface MockEntry {
	id: string
	type: EntryType
	timestamp: number
	data: any
	traceId: string
}
