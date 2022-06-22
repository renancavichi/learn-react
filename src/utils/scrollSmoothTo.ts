const scrollSmoothTo = (hash: string): void => {
	const section = document.querySelector(hash)
	section?.scrollIntoView({behavior: 'smooth', block: 'start'})
}

export default scrollSmoothTo
