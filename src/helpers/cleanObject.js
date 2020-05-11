export const cleanObject = obj => {
  return Object.entries(obj).reduce(
    (a, [k, v]) => (v == null ? a : { ...a, [k]: v }),
    {}
  );
};
