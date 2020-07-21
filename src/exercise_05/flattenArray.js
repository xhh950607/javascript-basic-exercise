export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (!array) throw Error('Flatten undefined or null array');

  return array.reduce((pre, cur) => {
    if (cur instanceof Array) return pre.concat(cur);
    pre.push(cur);
    return pre;
  }, []);
}
