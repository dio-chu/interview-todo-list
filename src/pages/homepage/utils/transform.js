/**
 * @module transform.js
 * @author dio-chu
 * @description 面試記錄相關的工具函數
 */

/**
 * getPositionValueFromLabel
 * @description 根據職位標籤獲取對應的值
 * @param {string} label - 職位標籤
 * @param {Array<Object>} positions - 職位選項數組
 * @returns {string} 對應的職位值，如果未找到則返回原標籤
 */
export function getPositionValueFromLabel(label, positions) {
  const position = positions.find((pos) => pos.label === label);
  return position ? position.value : label;
}

/**
 * getStatusValueFromLabel
 * @description 根據狀態標籤獲取對應的值
 * @param {string} label - 狀態標籤
 * @param {Array<Object>} statusGroup - 狀態選項數組
 * @returns {string} 對應的狀態值，如果未找到則返回原標籤
 */
export function getStatusValueFromLabel(label, statusGroup) {
  const status = statusGroup.find((status) => status.label === label);
  return status ? status.value : label;
}

/**
 * getPositionLabelFromValue
 * @description 根據職位值獲取對應的標籤
 * @param {string} value - 職位值
 * @param {Array<Object>} positions - 職位選項數組
 * @returns {string} 對應的職位標籤，如果未找到則返回原值
 */
export function getPositionLabelFromValue(value, positions) {
  const position = positions.find((pos) => pos.value === value);
  return position ? position.label : value;
}

/**
 * getStatusLabelFromValue
 * @description 根據狀態值獲取對應的標籤
 * @param {string} value - 狀態值
 * @param {Array<Object>} statusGroup - 狀態選項數組
 * @returns {string} 對應的狀態標籤，如果未找到則返回原值
 */
export function getStatusLabelFromValue(value, statusGroup) {
  const status = statusGroup.find((status) => status.value === value);
  return status ? status.label : value;
}
