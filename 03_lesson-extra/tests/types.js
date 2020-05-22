/**
 * @typedef {Object} DictionaryItem 
 * @property {string} word слово
 * @property {number} count количество использований в тексте
 * @property {string} code уникальный код
 */

/**
 * @typedef {Object} EncodeTextResult
 * @property {DictionaryItem[]} dictionary словарь
 * @property {string} encodedText перекодированный текст
 */