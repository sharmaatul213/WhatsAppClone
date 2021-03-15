/*eslint-disable */
// Libraries

const Utility = {
  // Converting an object into array
  convertObjectToArray(obj) {
    if (obj) {
      const array = Object.keys(obj).map((key, index) => {
        return obj[key];
      });
      return array;
    }
    return [];
  }
};

export default Utility;
