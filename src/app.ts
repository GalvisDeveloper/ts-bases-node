import { buildMakePerson, buildPerson, destructuring02, emailTemplate, getPokemonById, getUserById } from "./fundations";
import { assignId, buildLogger, getAge, httpClientPlugin } from "./plugins";

// #######################      Plugins
// -- Logger
buildLogger('app').log('Hello World!');

// -- Get Age
console.log(getAge('1995-05-05'));

// -- UUID
console.log(assignId());

// -- HTTP Client axios
httpClientPlugin.get('https://pokeapi.co/api/v2/pokemon/1').then(res => console.log(res)).catch(err => console.log(err));

// ########################     Ts road

// -- Template
console.log(emailTemplate)

// -- Destructuring
console.log(destructuring02)

// -- Callbacks
getUserById(1).then((user) => console.log(user)).catch((error) => console.log(error));

// -- Factory Function
console.log(buildPerson('1995-05-05', 'Cristian'))

// -- Factory
console.log(buildMakePerson({ getAge, assignId })('Cristian', '1995-05-05'))

// -- Promises
getPokemonById(1).then((pokemon) => console.log(pokemon)).catch((error) => console.log(error));