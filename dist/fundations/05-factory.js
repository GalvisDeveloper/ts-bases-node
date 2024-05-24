"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
const buildMakePerson = ({ getAge, assignId }) => {
    return (name, birthDate) => {
        return {
            id: assignId(),
            name,
            age: getAge(birthDate),
            birthDate: birthDate,
        };
    };
};
exports.buildMakePerson = buildMakePerson;
