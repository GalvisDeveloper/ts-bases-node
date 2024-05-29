"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fundations_1 = require("./fundations");
const plugins_1 = require("./plugins");
// #######################      Plugins
// -- Logger
(0, plugins_1.buildLogger)('app').log('Hello World!');
// -- Get Age
console.log((0, plugins_1.getAge)('1995-05-05'));
// -- UUID
console.log((0, plugins_1.assignId)());
// -- HTTP Client axios
plugins_1.httpClientPlugin.get('https://pokeapi.co/api/v2/pokemon/1').then(res => console.log(res)).catch(err => console.log(err));
// ########################     Ts road
// -- Template
console.log(fundations_1.emailTemplate);
// -- Destructuring
console.log(fundations_1.someone);
// -- Callbacks
(0, fundations_1.getUserById)(1, (err, user) => {
    if (err) {
        console.log(err);
    }
    console.log('User found ', user);
});
// -- Factory Function
console.log((0, fundations_1.buildPerson)('1995-05-05', 'Cristian'));
// -- Factory
console.log((0, fundations_1.buildMakePerson)({ getAge: plugins_1.getAge, assignId: plugins_1.assignId })('Cristian', '1995-05-05'));
// -- Promises
(0, fundations_1.getPokemonById)(1).then((pokemon) => console.log(pokemon)).catch((error) => console.log(error));
