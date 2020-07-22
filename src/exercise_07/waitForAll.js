export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.

  if (promises.filter(v => !(v instanceof Promise)).length > 0) throw Error('Not all elements are promises.');

  let catchError = false;

  return promises.reduce(
    (pre, cur) => pre.then(() => cur)
      .catch(() => {
        catchError = true;
        return cur;
      }),
  ).then(() => (catchError ? Promise.reject() : Promise.resolve()));
}
