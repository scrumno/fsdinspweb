import { Cpu } from 'lucide-react'
import type { GraphMode } from '../model/graph.types'
import { GraphButton } from './components/graph-button/GraphButton'

function ArchitectureGraphToolbar({
	setMode,
	mode,
}: {
	setMode: (name: GraphMode) => void
	mode: GraphMode
}) {
	return (
		<div className='flex flex-col md:flex-row items-start md:items-center justify-between p-4 border-b border-white/5 bg-[#121214] gap-4 z-10'>
			<div className='flex items-center gap-3'>
				<div className='flex gap-1.5'>
					<div className='w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50'></div>
					<div className='w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50'></div>
					<div className='w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50'></div>
				</div>
				<span className='ml-2 text-xs font-mono text-zinc-500 font-medium tracking-wide flex items-center gap-2'>
					<Cpu size={14} />
					ARCHITECTURE_MAP v2.3 (Extended)
				</span>
			</div>

			<div className='flex items-center bg-[#09090b] p-1 rounded-lg border border-white/10'>
				<GraphButton
					active={mode === 'overview'}
					onClick={() => setMode('overview')}
				>
					Общая схема
				</GraphButton>
				<GraphButton
					active={mode === 'interceptor'}
					onClick={() => setMode('interceptor')}
				>
					Interceptor Flow
				</GraphButton>
				<GraphButton active={mode === 'store'} onClick={() => setMode('store')}>
					Store Lifecycle
				</GraphButton>
			</div>
		</div>
	)
}

export default ArchitectureGraphToolbar
