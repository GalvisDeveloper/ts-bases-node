"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const users = [
    { id: 1, name: 'Jhon Doe', age: 24 },
    { id: 2, name: 'Cachon Doe', age: 25 },
];
const getUserById = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.id === id);
        if (!user) {
            return reject(`User with id: ${id} not found`);
        }
        resolve(user);
    });
};
exports.getUserById = getUserById;
