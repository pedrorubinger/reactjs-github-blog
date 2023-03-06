import Axios, { AxiosError } from "axios"

export const API_URL = String(import.meta.env.VITE_GITHUB_API_BASE)
export const Api = Axios.create({ baseURL: API_URL })

Api.interceptors.response.use(
	(response) => response,
	async (error: AxiosError) => {
		if (error?.response) {
			return Promise.reject(error.response)
		}

		return Promise.reject(error)
	}
)
