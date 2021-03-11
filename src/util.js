/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
//传入一个数组 一个函数 返回满足条件的第一个元素 否则返回undefined
export function find(list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
//深拷贝
export function deepCopy(obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, c => c.original === obj)
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy
  })

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy
}

/**
 * forEach for object
 */

export function forEachValue(obj, fn) {
  Object.keys(obj).forEach(key => fn(obj[key], key))
}

// 是不是一个object
export function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

// 判断是不是promise
export function isPromise(val) {
  return val && typeof val.then === 'function'
}


//用于检测传入内容是不是正确 不正确就抛出错误
export function assert(condition, msg) {
  if (!condition) throw new Error(`[vuex] ${msg}`)
}


export function partial(fn, arg) {
  return function () {
    return fn(arg)
  }
}
