const buildPerson = ({ birthDate, name }) => {
	return {
		id: new Date().getTime(),
		name,
		age: new Date().getFullYear() - new Date(birthDate).getFullYear(),
		birthDate,
	};
};

module.exports = { buildPerson };
