const { v4: uuidv4 } = require('uuid');

const assignId = () => {
	return uuidv4();
};

module.exports = { assignId };
