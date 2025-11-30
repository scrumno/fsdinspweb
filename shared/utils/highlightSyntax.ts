export const highlightSyntax = (line: string): string => {
	let processed = line
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')

	if (processed.includes('//')) {
		const [codePart, ...commentParts] = processed.split('//')
		return (
			highlightSyntax(codePart) +
			`<span style="color: #71717a; font-style: italic;">//${commentParts.join('//')}</span>`
		)
	}
	processed = processed.replace(
		/(['"`])(.*?)\1/g,
		'<span style="color: #7dd3fc">$1$2$1</span>'
	)

	const keywords =
		'import|export|from|const|let|var|function|return|if|else|interface|type|async|await|try|catch|new|class|extends|implements|default'
	processed = processed.replace(
		new RegExp(`\\b(${keywords})\\b`, 'g'),
		'<span style="color: #c084fc">$1</span>'
	)

	const builtins =
		'Promise|String|Number|Boolean|Array|Object|void|any|unknown|never|React|FC|Response|Request|Headers|console|window|document|Date|JSON|Math'
	processed = processed.replace(
		new RegExp(`\\b(${builtins})\\b`, 'g'),
		'<span style="color: #fbbf24">$1</span>'
	)

	processed = processed.replace(
		/\b(true|false|null|undefined)\b/g,
		'<span style="color: #f87171">$1</span>'
	)

	processed = processed.replace(
		/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g,
		'<span style="color: #60a5fa">$1</span>'
	)

	return processed
}
