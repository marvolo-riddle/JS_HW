export function validateSelector(selector) {
  if (typeof selector !== 'string') {
    throw new Error('Selector should be a string')
  }

  if (selector.trim() === '') {
    throw new Error('Selector should not be empty')
  }

  const element = document.querySelector(selector);
  if (element === null) throw new Error('Element did not found in DOM')
}