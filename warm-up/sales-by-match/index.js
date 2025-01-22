'use strict';

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

export default sockMerchant = (n, ar) => {
  let socks = Object.fromEntries(ar.map((k) => [k, 0]));

  for (let i = 0; i < n; i++) {
    socks[ar[i]]++;
  }

  let pairs = Object.values(socks).reduce(
    (sum, value) => sum + Math.floor(value / 2),
    0
  );

  return pairs;
};
