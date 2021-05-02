const linearSearch = (array, value) => {
  const search = array.some((e) => e === value);
  return search ? value : null
}