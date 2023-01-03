const treeToMap = (tree = [], map = {}, level = 0) => {
  level++;
  tree.forEach((current) => {
    const { children } = current;
    current.level = level;
    map[current.key] = current;
    if (children) {
      return treeToMap(children, map, level);
    }
  });
  return map;
};

export { treeToMap };
