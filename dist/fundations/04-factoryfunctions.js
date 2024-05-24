"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPerson = void 0;
const buildPerson = (birthDate, name) => {
    return {
        id: new Date().getTime(),
        name,
        age: new Date().getFullYear() - new Date(birthDate).getFullYear(),
        birthDate,
    };
};
exports.buildPerson = buildPerson;
