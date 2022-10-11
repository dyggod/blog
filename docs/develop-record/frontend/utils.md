# utils

### debounce 防抖

```javascript
/**
 * 防抖函数，用于限制函数的执行频率
 * @param {function} func 要使用防抖的函数
 * @param {Object} options 防抖的时间
 * @returns
 */
export function debounceWrapper(func, options) {
  let timeout;
  const { wait = 500, immediate = true } = options || {};
  return function debounced(...args) {
    const context = this;
    const later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
}
```
