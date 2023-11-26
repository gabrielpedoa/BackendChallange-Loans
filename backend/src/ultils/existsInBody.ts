export default (type: string | number, value: string | number) => {
  if (!value) throw new Error(`O(a) ${type} é necessario(a)`);
};
