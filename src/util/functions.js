/**
 * Returns an array of the offset values by subtracting the minimum 'from' value from each 'from' value.
 * @param  {...Array} jsonArrays - Variable number of JSON arrays.
 * @returns {Array} Array of offset values in the order of the arguments.
 */
export function calacOffsets(...jsonArrays) {
  const fromValues = jsonArrays.map(arr => (Array.isArray(arr) && arr.length > 0 ? arr[0].from : undefined));
  const validFroms = fromValues.filter(v => typeof v === 'number');
  const minFrom = validFroms.length > 0 ? Math.min(...validFroms) : 0;
  return fromValues.map(v => (typeof v === 'number' ? v - minFrom : undefined));
}

//generate random color
export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}