const { buildLogger } = require('./plugins');

const logger = buildLogger('app');

logger.log('Hello World!');
logger.error('Error World!');

// const { getPokemonById } = require('./fundations/06-promises');

// getPokemonById(2)
// 	.then((res) => console.log(`Pokemon: ${res.name}`))
// 	.catch((err) => console.log(err));

// const { getAge, assignId } = require('./public');

// const { buildMakePerson } = require('./fundations/05-factory');

// const objPerson = { name: 'Jhon', birthDate: '1997-06-08' };

// const makePerson = buildMakePerson({ getAge, assignId });

// const p1 = makePerson(objPerson);

// console.log(p1);
