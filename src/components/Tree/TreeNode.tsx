import React, { memo } from "react";

interface TreeNodeType {
  id: string;
  title: string;
  level: number;
  isExpanded: boolean;
  isEmptyChildren: boolean;
  handleExpanded: (key: string) => {};
}

const TreeNode = memo((props: TreeNodeType) => {
  const {
    id,
    title,
    level,
    isEmptyChildren,
    isExpanded,
    handleExpanded
  } = props;

  const style = {
    marginLeft: `${(level - 1) * 18}px`
  };

  return (
    <div className="tree-node" style={style}>
      <div
        className={
          isEmptyChildren
            ? "tree-switcher-close"
            : isExpanded
            ? "tree-switcher-open"
            : ""
        }
      >
        <div className="tree-switcher" onClick={() => handleExpanded(id)}></div>
      </div>
      <div>{title}</div>
    </div>
  );
});

TreeNode.displayName = "TreeNode";

export { TreeNode };
