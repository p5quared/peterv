const lenLimit = (limit: number) => (text: string) => {
	if (text.length > limit) {
		return text.slice(0, limit) + "..."
	}
	return text
}

const descriptionLimiter = lenLimit(60)

export { descriptionLimiter }
