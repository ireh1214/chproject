import React from 'react';
import { Divider, List, Typography } from 'antd';

export default function songList() {
  const data = [
    'From the inside out',
    'you are good',
    '하늘보다 넓고 바다보다 크신',
    'our god',
  ];

  return (
    <>
      <Divider orientation="left">2/20</Divider>
      <List
        header={<div>*</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>[1번 곡]</Typography.Text> {item}
          </List.Item>
        )}
      />
    </>
  );
}
