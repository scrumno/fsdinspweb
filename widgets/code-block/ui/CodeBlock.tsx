import { Check, Copy, Terminal } from 'lucide-react'
import { useState } from 'react'
import { highlightSyntax } from 'shared/utils/highlightSyntax'

interface CodeBlockProps {
	code: string
	language?: string
	fileName?: string
	highlightLines?: number[]
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
	code,
	fileName,
	highlightLines = [],
}) => {
	const [copied, setCopied] = useState(false)

	const handleCopy = () => {
		navigator.clipboard.writeText(code)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<div className='my-6 rounded-xl border border-border bg-[#0e0e10] overflow-hidden group shadow-card'>
			{fileName && (
				<div className='flex items-center justify-between px-4 py-3 border-b border-border bg-[#121214]'>
					<div className='flex items-center gap-2 text-xs text-brand-gray font-mono'>
						<Terminal size={14} className='text-brand-purple opacity-80' />
						<span className='opacity-80'>{fileName}</span>
					</div>
					<button
						onClick={handleCopy}
						className='text-zinc-500 hover:text-zinc-200 transition-colors'
					>
						{copied ? (
							<Check size={14} className='text-brand-green' />
						) : (
							<Copy size={14} />
						)}
					</button>
				</div>
			)}
			<div className='p-4 overflow-x-auto relative scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent'>
				{!fileName && (
					<button
						onClick={handleCopy}
						className='absolute top-4 right-4 text-zinc-500 hover:text-zinc-200 transition-colors opacity-0 group-hover:opacity-100 z-10 bg-[#0e0e10]/50 backdrop-blur rounded p-1'
					>
						{copied ? (
							<Check size={14} className='text-brand-green' />
						) : (
							<Copy size={14} />
						)}
					</button>
				)}
				<pre className='font-mono text-[13px] leading-6'>
					{code.split('\n').map((line, i) => (
						<div
							key={i}
							className={`w-full ${highlightLines.includes(i + 1) ? 'bg-brand-blue/10 -mx-4 px-4 border-l-2 border-brand-blue' : ''}`}
						>
							<span className='text-zinc-700 mr-4 select-none w-6 inline-block text-right text-[11px]'>
								{i + 1}
							</span>
							<span
								className='text-zinc-300'
								dangerouslySetInnerHTML={{ __html: highlightSyntax(line) }}
							/>
						</div>
					))}
				</pre>
			</div>
		</div>
	)
}
