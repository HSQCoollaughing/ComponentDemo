import React, { memo, useMemo, useState, useCallback } from "react";
import { TreeNode } from "./TreeNode";
import { treeToMap } from "../../utils/tools";

type expandedKeysType = string[];

interface treeDataItemType {
  title: string;
  key: string;
  children: treeDataItemType[];
}

type treeDataType = treeDataItemType[];

interface TreeTypes {
  expandedKeys: expandedKeysType;
  treeData: treeDataType;
}

const Tree = memo((props: TreeTypes) => {
  const [state, setState] = useState({
    expandedKeys: props.expandedKeys
  });

  const treeMap = useMemo(() => {
    const { treeData } = props;
    return treeToMap([...treeData]);
  }, [props.treeData]);

  const handleExpanded = useCallback(
    (key: string): any => {
      const newExpandedKeys: expandedKeysType = [...state.expandedKeys];
      const index = newExpandedKeys?.indexOf(key);
      index > -1 ? newExpandedKeys.splice(index, 1) : newExpandedKeys.push(key);
      setState({
        expandedKeys: newExpandedKeys
      });
    },
    [state.expandedKeys]
  );

  const renderTreeNode = (treeData) => {
    const { expandedKeys } = state;
    return (
      <div>
        {treeData?.map((treeItem) => {
          const { key, title, children } = treeItem;
          const isExpanded = expandedKeys?.includes(key);
          const isEmptyChildren = !children?.length;
          return (
            <div key={key}>
              <TreeNode
                title={title}
                id={key}
                level={treeMap[key].level}
                isEmptyChildren={isEmptyChildren}
                isExpanded={isExpanded}
                handleExpanded={handleExpanded}
              />
              {!isEmptyChildren && isExpanded && renderTreeNode(children)}
            </div>
          );
        })}
      </div>
    );
  };

  const { treeData } = props;
  return <div className="container">{renderTreeNode(treeData)}</div>;
});

Tree.displayName = "Tree";

(Tree as React.ComponentType<TreeTypes>).defaultProps = {
  expandedKeys: []
};

export { Tree };
