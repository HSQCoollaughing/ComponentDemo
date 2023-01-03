import React from "react";
import { Toast } from "./components/Toast/index";
import { Tree } from "./components/Tree/index";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./styles.css";
import "./styles/Toast.scss";
import "./styles/Tree.scss";

// 测试关闭回调
const closeCallback = () => {
  console.log(1);
};

const treeData = [
  {
    title: "我是1",
    key: "1",
    children: [
      {
        title: "我是1-1",
        key: "1-1",
        children: [
          {
            title: "我是1-1-1",
            key: "1-1-1"
          },
          {
            title: "我是1-1-2",
            key: "1-1-2"
          },
          {
            title: "我是1-1-3",
            key: "1-1-3"
          }
        ]
      },
      {
        title: "我是1-2",
        key: "1-2",
        children: [
          {
            title: "我是1-2-1",
            key: "1-2-1"
          },
          {
            title: "我是1-2-2",
            key: "1-2-2"
          }
        ]
      }
    ]
  },
  { title: "我是2", key: "2", children: [] }
];

const App = () => {
  const successToast = () => {
    Toast.success("This is a success message.", 1000, closeCallback);
  };
  const errorToast = () => {
    Toast.error("This is an error message.", 3000);
  };

  return (
    <div className="container">
      <Button type="primary" onClick={successToast}>
        Success Button
      </Button>
      <Button type="primary" danger onClick={errorToast}>
        Error Button
      </Button>
      <Tree treeData={treeData} />
    </div>
  );
};
export { App };
