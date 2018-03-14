export const sortObjectsById = objects => {
  const compare = (a,b) =>  {
    if (a.id > b.id)
      return -1;
    if (a.id < b.id)
      return 1;
    return 0;
  }

  objects.sort(compare);
  return objects;
}