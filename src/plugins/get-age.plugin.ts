

export const getAge = (birthDate: string) => {
	if (!birthDate) return new Error('birthDate is required');
	return new Date().getFullYear() - new Date(birthDate).getFullYear();
};


