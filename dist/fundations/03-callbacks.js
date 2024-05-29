"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const users = [
    { id: 1, name: 'Jhon Doe', age: 24 },
    { id: 2, name: 'Cachon Doe', age: 25 },
];
const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);
    if (!user) {
        return callback(`User with id: ${id} not found`);
    }
    return callback(undefined, user);
};
exports.getUserById = getUserById;
