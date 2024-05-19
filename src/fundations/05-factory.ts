
interface Props {
	getAge: (birthDate: string) => void;
	assignId: () => void;
}

export const buildMakePerson = ({ getAge, assignId }: Props) => {
	return (name: string, birthDate: string) => {
		return {
			id: assignId(),
			name,
			age: getAge(birthDate),
			birthDate: birthDate,
		};
	};
};

