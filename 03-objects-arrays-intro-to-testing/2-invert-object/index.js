/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  let newObj = {}
  if(!obj){
    return undefined
  }
  console.log(Object.entries(obj))
  let map = new Map()
  for(let [key, value] of Object.entries(obj)){
    console.log(key + ':' + value)
    map.set(value,key)
    console.log(map.set(value,key))
  };
  newObj = Object.fromEntries(map.entries());
  return newObj;
}
