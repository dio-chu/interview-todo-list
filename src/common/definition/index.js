export const defineEnum = (object) => {
  try {
    const enumObject = {};
    Object.keys(object).forEach((propsName) => {
      Object.defineProperty(enumObject, propsName, {
        value: object[propsName],
        enumerable: true, // 可列舉
        configurable: false, // 不給予刪除
        writable: false, // 不可重新賦值
      });
    });
    return Object.freeze(enumObject);
  } catch (error) {
    return object;
  }
};
export default { defineEnum };
