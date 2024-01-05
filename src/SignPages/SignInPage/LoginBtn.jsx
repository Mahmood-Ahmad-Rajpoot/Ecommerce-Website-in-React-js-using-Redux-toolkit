import React, { useState } from 'react'
import {    Container } from '@mui/material'
 
import { useDispatch, useSelector } from 'react-redux'
import { setSignIn } from '../../features/signInSlice'
import { Button } from 'antd'
import { useNavigate } from 'react-router'
  
const LoginBtn = ({inputValue}) => {
  const {name, password}=useSelector((store)=>store.signUp)

    const dispatch =useDispatch();
    const navigate =useNavigate();
    const [loading, setLoading] =useState(false)
    const login = inputValue.password ===password && inputValue.name===name? false : true
    // handelr
    const handleLogin=()=>{
        setLoading(true)
      setTimeout(() => {
        setLoading(false)
        dispatch(setSignIn());
        navigate('/homePage')
        
      }, 2000);  

    }
  return (
    <Container className="d-flex  justify-content-center">
            <Button Button disabled={login} loading={loading}  
            onClick={handleLogin}
              type="primary"
              className="col-10 align-self-center  mb-5"
            >
              Login
            </Button>
          </Container>
  )
}

export default LoginBtn