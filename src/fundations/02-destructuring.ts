const { JAVA_HOME, COLORTERM } = process.env;
console.table({ JAVA_HOME, COLORTERM });

const character: string[] = ['Iron Man', 'Spider Man', 'Hulk'];
console.table(character);

const [, __, someone] = character;

console.log(__);

export default {};