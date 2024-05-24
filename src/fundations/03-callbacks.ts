interface User {
	id: number;
	name: string;
	age: number;
}

const users: User[] = [
	{ id: 1, name: 'Jhon Doe', age: 24 },
	{ id: 2, name: 'Cachon Doe', age: 25 },
];

export const getUserById = (id: number, callback: (err?: string, user?: User) => void) => {
	const user = users.find((user) => user.id === id);
	if (!user) {
		return callback(`User with id: ${id} not found`);
	}
	return callback(undefined, user);
};

