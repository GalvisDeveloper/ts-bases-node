interface User {
	id: number;
	name: string;
	age: number;
}

const users: User[] = [
	{ id: 1, name: 'Jhon', age: 24 },
	{ id: 2, name: 'Doe', age: 25 },
];

export const getUserById = (id: number) => {
	return new Promise((resolve, reject) => {
		const user = users.find((user) => user.id === id);

		if (!user) {
			return reject(`User with id: ${id} not found`);
		}

		resolve(user);
	});
};

