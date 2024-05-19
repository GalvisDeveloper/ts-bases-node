import axios from "axios";


export const httpClientPlugin = {
	get: async (url: string) =>
		await axios
			.get(url)
			.then((response) => response.data)
			.catch((error) => error),
	post: async (url: string, body: object) =>
		await axios
			.post(url, body)
			.then((response) => response.data)
			.catch((error) => error),
	put: async (url: string, body: object) =>
		await axios
			.put(url, body)
			.then((response) => response.data)
			.catch((error) => error),
	delete: async (url: string) =>
		await axios
			.delete(url)
			.then((response) => response.data)
			.catch((error) => error),
};


