const buildPath = (to, params = {}) => {
  let target = to;

  for (let [key, val] of Object.entries(params)) {
    target = target.replace(`:${key}`, val)
  }

  return target
};

export default buildPath;
