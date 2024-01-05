import React from 'react'
import { Button, Empty } from 'antd';
import { Link } from 'react-router-dom';

const EmptyFavourite = () => {
  return (
    <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 60,
    }}
    description={
      <span className='text-secondary'>
        You have not added any product as a favourite...
      </span>
    }
  >
   <Link to={'/homePage'}> <Button  type="primary">Add Products Now</Button></Link>
  </Empty>
  )
}

export default EmptyFavourite