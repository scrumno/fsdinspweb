import type { JSX } from 'react'
import { SectionHeader } from 'shared/ui/section-header/SectionHeader'
import { CodeBlock } from 'widgets/code-block/ui/CodeBlock'

export default function TypesPage(): JSX.Element {
	return (
		<>
			<div className='space-y-10 animate-[fadeIn_0.5s_ease-out]'>
				<SectionHeader title='Типы' subtitle='' />

				<div className='grid gap-8'>
					<div>
						<h4 className='text-zinc-100 font-bold mb-2'>
							DebugEntry (Union Type)
						</h4>
						<p className='text-zinc-400 text-sm mb-4'>
							Основной тип записи в логе. Может быть запросом, значением или
							рендером.
						</p>
						<CodeBlock
							fileName='types.ts'
							code={`export type DebugEntry = DebugFetchEntry | DebugValueEntry | DebugRenderEntry

export interface DebugBaseEntry {
  id: string
  timestamp: number
  trace: string // Стек вызовов
}`}
						/>
					</div>

					<div>
						<h4 className='text-zinc-100 font-bold mb-2'>Network Entry</h4>
						<CodeBlock
							fileName='types.ts'
							code={`export interface DebugFetchEntry extends DebugBaseEntry {
  readonly type: 'fetch'
  readonly duration: number
  readonly request: {
    readonly url: string
    readonly method: string
    readonly body?: unknown
    readonly headers?: Record<string, string>
  }
  readonly response: {
    readonly status: number
    readonly statusText: string
    readonly body: unknown
  }
}`}
						/>
					</div>

					<div>
						<h4 className='text-zinc-100 font-bold mb-2'>Render Entry</h4>
						<CodeBlock
							fileName='types.ts'
							code={`export interface DebugRenderEntry extends DebugBaseEntry {
  readonly type: 'render'
  readonly componentName: string
  readonly count: number
  readonly message: string // Причина рендера
  props?: Record<string, any> // Diff пропсов
}`}
						/>
					</div>
				</div>
			</div>
		</>
	)
}
