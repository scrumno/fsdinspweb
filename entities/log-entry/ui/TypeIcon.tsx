import { Code, Cpu, Globe } from 'lucide-react'
import type { EntryType } from '../model/types'

export const TypeIcon = ({ type }: { type: EntryType }) => {
	if (type === 'fetch') return <Globe size={14} />
	if (type === 'render') return <Cpu size={14} />
	return <Code size={14} />
}
