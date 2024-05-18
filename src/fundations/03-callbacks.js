const users = [
	{ id: 1, name: 'Jhon', age: 24 },
	{ id: 2, name: 'Doe', age: 25 },
];

const getUserById = (id) => {
	return new Promise((resolve, reject) => {
		const user = users.find((user) => user.id === id);

		if (!user) {
			return reject(`User with id: ${id} not found`);
		}

		resolve(user);
	});
};

module.exports = {
	getUserById,
};
