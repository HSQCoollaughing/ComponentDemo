import React from "react";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";

const iconsMap = {
  success: <CheckCircleTwoTone twoToneColor="#52c41a" />,
  error: <CloseCircleTwoTone twoToneColor="#e4393c" />
};

// 纯UI组件
const Notice = (props) => {
  const { type, content } = props;
  return (
    <div className="notice">
      {iconsMap[type]}
      <span className="noticeContent">{content}</span>
    </div>
  );
};

export { Notice };
