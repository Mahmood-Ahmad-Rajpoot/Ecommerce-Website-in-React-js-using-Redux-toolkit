import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {signUpData} from "../../features/signUp";
import { setSignIn } from "../../features/signInSlice";
import { Link, useNavigate } from "react-router-dom";
import { Button, message } from "antd";
const SignUpBtn = ({ data }) => {
  // redux setup
  // const signUp = useSelector((store)=>store.signUp);
  const dispatch = useDispatch();
  const navigate= useNavigate();
//   const [messageApi, contextHolder] = message.useMessage();
// success message =
const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'SignUp Successfully',
    });
  };



  const { name, password, confirmPassword, email } = data;
  //   validations
  //   const [passMatch, setPassMatch] = useState(false);

  const empty =
    password !== confirmPassword ||
    password === "" ||
    confirmPassword === "" ||
    name === "" ||
    email === "";

  //    setPassMatch(false);

  //
  const [loading, setLoading] = useState(false);
  const enterLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/Suggestion'); 
      
    }, 5000);
    dispatch(signUpData({ name: name, password: password, email: email }));
    dispatch(setSignIn());
  };

  return (
    <div className="col-10 align-self-center  mb-5">
 
       {contextHolder}
         <Button
        disabled={empty}
        block
        type="primary"
        loading={loading}
        onClick={() => {
            enterLoading()
            setTimeout(()=>success(), 4000)

        }}
      >
        Create Account
      </Button>
     
    </div>
  );
};

export default SignUpBtn;
