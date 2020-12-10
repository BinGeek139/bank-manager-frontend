import React from 'react';
import './styles.css';

import {
  Collapse,
} from 'antd';

import {
  SearchOutlined,
  FileAddTwoTone,
} from '@ant-design/icons';


const { Panel } = Collapse;

const listIcon = () => {
  return (
    <>
      <FileAddTwoTone
        title="Thêm mới"
        twoToneColor="#52c41a"
        onClick={event => {
          event.stopPropagation();
        }}
      />
    </>
  )
}


function FilterSearch({
  ...props
}) {

  const { children } = props;
  const { headerIcons } = props;

  const callback = (key) => {
    //console.log(key);
  }

  return (
    <>
      <Collapse onChange={callback} >
        <Panel
          key="1"
          showArrow={false}
          header={headerIcons}
          extra={
            <SearchOutlined title="Tìm kiếm" />
          }
        >
          {children}
        </Panel>
      </Collapse>
    </>
  );
}

export default FilterSearch;