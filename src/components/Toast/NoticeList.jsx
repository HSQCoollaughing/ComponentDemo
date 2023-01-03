import React, { Component } from "react";
import { nanoid } from "nanoid";
import ReactDOM from "react-dom";
import { Notice } from "./Notice";

class NoticeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notices: []
    };
  }

  removeNotice = (key) => {
    this.setState((preState) => {
      return {
        notices: preState.notices.filter((notice) => {
          // 根据key删除对应的notice，同时处理callback
          if (notice.key === key) {
            if (notice.onClose) {
              notice.onClose();
            }
            return false;
          }
          return true;
        })
      };
    });
  };

  addNotice = (notice) => {
    const { notices } = this.state;
    // 设置独一无二的key
    notice.key = nanoid();
    notices.push(notice);
    // 设置消失的定时器
    if (notice.duration > 0) {
      setTimeout(() => {
        this.removeNotice(notice.key);
      }, notice.duration);
    }
    this.setState({
      notices: notices
    });
  };

  renderNoticeList = () => {
    const { notices } = this.state;
    return notices.map((notice) => {
      return <Notice key={notice.key} {...notice} />;
    });
  };

  render() {
    return <div className="notice-list">{this.renderNoticeList()}</div>;
  }
}

NoticeList.getNoticeListInstance = function () {
  // 创建全局toast容器
  const div = document.createElement("div");
  document.body.appendChild(div);
  const noticelist = ReactDOM.render(<NoticeList />, div);

  return {
    addNotice(noticeProps) {
      //调用notification实例，为其添加新的notice
      noticelist.addNotice(noticeProps);
    }
  };
};

export { NoticeList };
