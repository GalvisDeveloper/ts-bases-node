
const buildMakePerson = ({getAge , assignId}) => {
	return ({ name, birthDate }) => {
		return {
			id: assignId(),
			name,
			age: getAge(birthDate),
			birthDate: birthDate,
		};
	};
};

module.exports = { buildMakePerson };
