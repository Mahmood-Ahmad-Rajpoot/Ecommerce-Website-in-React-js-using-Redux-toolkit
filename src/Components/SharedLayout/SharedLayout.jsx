import React, { useState } from 'react'
import NavBar from '../NavBar/Navbar'
import {Outlet} from 'react-router-dom'
import HomeSkeleton from '../HomePage/Home/HomeComponents/HomeSkeleton'

const SharedLayout = () => {
  const [showSkel , setShowSkel] = useState(true);
  setTimeout(()=>{setShowSkel(false)},2500)
  return (
    <>
    {showSkel ? <HomeSkeleton/> :
         <>
      <NavBar/>
      <Outlet />
         </>
   }
   
 

    </>
  )
}

export default SharedLayout