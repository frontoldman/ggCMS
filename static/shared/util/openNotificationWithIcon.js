import { 
  notification,
} from 'antd';

export default function (type, message) {
    return notification[type]({
      message
    });
};