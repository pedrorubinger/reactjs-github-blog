export const removeMarkdownFormatting = (input: string): string => {
	const regex = /(\*\*|__|\*|_|~~|`)/g // regular expression to match markdown formatting characters
	const headerRegex = /^#+\s+/gm // regular expression to match markdown headers
	return input.replace(regex, "").replace(headerRegex, "") // remove all markdown formatting characters and headers from input string
}
