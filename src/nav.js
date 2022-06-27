import { AppstoreOutlined, MailOutlined, SettingOutlined,UnorderedListOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
const items = [
  {
    label: 'Today page',
    key: 'today',
    icon: <MailOutlined />,
  },
  {
    label: 'Archive Page',
    key: 'archive',
    icon: <UnorderedListOutlined />,
  },
  {
    label:'All due to-do entries',
    key:'alltododue',
    icon:<UnorderedListOutlined/>
  },
  {
    label:'Today due to-do entries',
    key:'todaydue',
    icon:<UnorderedListOutlined/>
  }
  
  

];
const items2 = [
    {
      label: 'Personal',
      key: 'personal',
      icon: <UnorderedListOutlined />,
    },
    {
      label: 'Home',
      key: 'home',
      icon: <UnorderedListOutlined />,
    },
    {
      label:'Office',
      key:'office',
      icon:<UnorderedListOutlined/>
    },
  
  
  ];
const Nav = (props) => {
  const [current, setCurrent] = useState('today');

  const onClick = (e) => {
    console.log('click ', e.key);
    setCurrent(e.key);
  props.pin(e.key)
    // console.log(current)
  };

  return(
  <div>
    <Menu onClick={onClick} style={{width:300}} selectedKeys={[current]} mode="vertical" items={items} />
  <hr style={{widht:300}}></hr>
  <Menu onClick={onClick} style={{width:300}} selectedKeys={[current]} mode="vertical" items={items2}/>
  </div>
  ) ;
};

export default Nav;