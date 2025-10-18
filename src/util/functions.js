/**
 * Returns an array of the offset values by subtracting the minimum 'from' value from each 'from' value.
 * @param  {...Array} jsonArrays - Variable number of JSON arrays.
 * @returns {Array} Array of offset values in the order of the arguments.
 */
export function calcOffsets(...jsonArrays) {
  //min value of 'from' property across all arrays first elements
  const output={start:'',end:'',offset:[]}
  const fromValues = jsonArrays.map(arr => (Array.isArray(arr) && arr.length > 0 ? arr[0].from : undefined));
  const validFroms = fromValues.filter(v => typeof v === 'number');
  const minFrom = validFroms.length > 0 ? Math.min(...validFroms) : 0;
  output.start = minFrom;
  //max value of 'to' property across all arrays last elements
  const toValues = jsonArrays.map(arr => (Array.isArray(arr) && arr.length
  > 0 ? arr[arr.length - 1].to : undefined));
  const validTos = toValues.filter(v => typeof v === 'number');
  const maxTo = validTos.length > 0 ? Math.max(...validTos) : 0;
  output.end = maxTo;
  output.offset = fromValues.map(v => (typeof v === 'number' ? v - minFrom : undefined));
  return output;
}

//extract header props
export function extractHeaderProps(jsonArray) {
  if (!Array.isArray(jsonArray)) return [];
  return jsonArray.map(obj => ({
    id: obj.id,
    name: obj.name
  }));
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