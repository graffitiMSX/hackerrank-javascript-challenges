'use strict'

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

export default sockMerchant = (n, ar) => {
  let pairs = 0  
  let max = Math.max(...ar)
  let socks = new Array(max)

  for (let i = 0; i < n; i++) {
    if (!socks[ar[i]]) socks[ar[i]] = 1
    else socks[ar[i]]++
  }

  for (let i = 0; i < socks.length; i++) {
    if (socks[i])
      pairs += Math.floor(socks[i] / 2)
  }

  return pairs
}
