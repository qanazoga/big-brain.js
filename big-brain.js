/**
 * Returns a random int [min, max).
 * @param  {...Number} args min (optional, defaults to 0), max
 */
function randInt(...args) {
	const max = (args[1]) ? args[1] : args[0];
	const min = (args[1]) ? args[0] : 0;
	return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Creates an Array range [min, max).
 * @param  {...Number} args min (optional, defaults to 0), max
 */
function range(...args) {
	const max = Math.max(...args);
	const min = (Math.min(...args) == max) ? 0 : Math.min(...args);
	let arr = [...Array(Math.abs(max - min)).keys()].map(num => num += min);
	if (args.length == 2 && args[0] == max) arr = arr.map(num => num += 1).reverse();
	return arr;
}

/**
 * Returns a random item from an array.
 * @param {Array} array
 */
function randChoice(array) {
	return array[randInt(array.length)];
}

/**
 * Returns a shuffled array.
 * Does NOT mutate the array.
 * @param {Array} array
 */
function shuffleArray(array) {
	for (const i of range(array.length)) {
		const j = randInt(i);
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

module.exports = { randInt, range, randChoice, shuffleArray };