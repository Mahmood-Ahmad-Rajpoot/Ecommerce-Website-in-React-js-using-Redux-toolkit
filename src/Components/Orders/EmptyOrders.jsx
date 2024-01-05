import React from 'react'
import { Button, Empty } from 'antd';
import { Link } from 'react-router-dom';

const EmptyOrders = () => {
  return (
    <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 60,
    }}
    description={
      <span className='text-secondary'>
        You Have Not Bought any item yet...
      </span>
    }
  >
   <Link to={'/homePage'}> <Button  type="primary">Buy Products Now</Button></Link>
  </Empty>
  )
}

export default EmptyOrders