import React from 'react'
import { Button, Empty } from 'antd';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 60,
    }}
    description={
      <span className='text-secondary'>
        Your Bag is currently empty
      </span>
    }
  >
   <Link to={'/homePage'}> <Button  type="primary">Add Products Now</Button></Link>
  </Empty>
  )
}

export default EmptyCart