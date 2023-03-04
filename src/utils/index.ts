export const dateFormatter = new Intl.DateTimeFormat("pt-BR")

export const priceFormatter = new Intl.NumberFormat("pt-BR", {
	currency: "BRL",
	style: "currency",
})

export const getTimePassed = (startDate: Date, endDate: Date = new Date()) => {
	// Calculate the time difference between the start and end dates in milliseconds
	const timeDiff = Math.abs(endDate.getTime() - startDate.getTime())

	// Calculate the time units in milliseconds
	const oneYear = 31536000000 // 365 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
	const oneMonth = 2592000000 // 30 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
	const oneWeek = 604800000 // 7 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
	const oneDay = 86400000 // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
	const oneHour = 3600000 // 60 minutes * 60 seconds * 1000 milliseconds
	const oneMinute = 60000 // 60 seconds * 1000 milliseconds
	const oneSecond = 1000 // 1000 milliseconds

	// Calculate the time passed in each unit
	const years = Math.floor(timeDiff / oneYear)
	const months = Math.floor(timeDiff / oneMonth)
	const weeks = Math.floor(timeDiff / oneWeek)
	const days = Math.floor(timeDiff / oneDay)
	const hours = Math.floor(timeDiff / oneHour)
	const minutes = Math.floor(timeDiff / oneMinute)
	const seconds = Math.floor(timeDiff / oneSecond)

	// Determine the most appropriate unit of time to display
	if (years > 0) {
		return `Há ${years} ano${years === 1 ? "" : "s"}`
	} else if (months > 0) {
		return `Há ${months} ${months === 1 ? "mês" : "meses"}`
	} else if (weeks > 0) {
		return `Há ${weeks} semana${weeks === 1 ? "" : "s"}`
	} else if (days > 0) {
		return `Há ${days} dia${days === 1 ? "" : "s"}`
	} else if (hours > 0) {
		return `Há ${hours} hora${hours === 1 ? "" : "s"}`
	} else if (minutes > 0) {
		return `Há ${minutes} minuto${minutes === 1 ? "" : "s"}`
	} else {
		return `Há ${seconds} segundo${seconds === 1 ? "" : "s"}`
	}
}
