import { NoticeList } from "./NoticeList";

const defaultDuration = 3000;
let noticeListInstance;

const getNoticeListInstance = () => {
  // 保证单例，只创建一个noticeList实例
  if (!noticeListInstance) {
    noticeListInstance = NoticeList.getNoticeListInstance();
  }
  return noticeListInstance;
};

const toast = (type, content, duration = defaultDuration, onClose) => {
  let noticeListInstance = getNoticeListInstance();
  // 本质上就是给noticeList不停的加通知
  noticeListInstance.addNotice({
    type,
    content,
    duration,
    onClose
  });
};

export default {
  success(content, duration, onClose) {
    return toast("success", content, duration, onClose);
  },
  error(content, duration, onClose) {
    return toast("error", content, duration, onClose);
  }
};
