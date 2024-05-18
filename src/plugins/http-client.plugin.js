const axios = require('axios');

const httpClientPlugin = {
	get: async (url) =>
		await axios
			.get(url)
			.then((response) => response.data)
			.catch((error) => error),
	post: async (url, body) =>
		await axios
			.post(url, body)
			.then((response) => response.data)
			.catch((error) => error),
	put: async (url, body) =>
		await axios
			.put(url, body)
			.then((response) => response.data)
			.catch((error) => error),
	delete: async (url) =>
		await axios
			.delete(url)
			.then((response) => response.data)
			.catch((error) => error),
};

module.exports = { httpClientPlugin };
