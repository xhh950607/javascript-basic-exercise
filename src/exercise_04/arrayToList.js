export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if (!array) throw Error('Creating list from undefined array');

  if (array.length === 0) throw Error('Creating list from empty array');

  const head = {};
  array.reduce((pre, cur) => {
    const node = { value: cur, next: null };
    // eslint-disable-next-line no-param-reassign
    pre.next = node;
    return node;
  }, head);
  return head.next;
}
