
export const buildPerson = (birthDate: string, name: string) => {
	return {
		id: new Date().getTime(),
		name,
		age: new Date().getFullYear() - new Date(birthDate).getFullYear(),
		birthDate,
	};
};

