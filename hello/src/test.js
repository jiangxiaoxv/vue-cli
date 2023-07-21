// 求数组中两个元素相加为某个值的两个坐标 要求O(n)复杂度
// ''`
// getTargetIndexs([6,5,3,4,7,9], 10)
// ```

function getTargetIndexs(arr, target) {
  if (!Array.isArray(arr)) {
    return []
  }
  const map = new Map()

  for (let i = 0; i < arr.length; i++) {
    const temp = target - arr[i]
    if (map.has(temp)) {
      return [i, map.get(temp)]
    }
    map.set(arr[i], i)
  }
  return []
}

console.log(getTargetIndexs([6, 5, 3, 4, 7, 9], 11))
