import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setCloseSignInFirstModal } from "../../features/signInFirstModalSlice";
import { useNavigate } from "react-router";

const SignInFirstModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { openModal } = useSelector((store) => store.signInFirstModal);
  const [loading, setLoading] = useState(false);
  // handlers
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(setCloseSignInFirstModal());
      navigate("/loginPage");
    }, 1500);
  };

  return (
    <Modal
      title="You need to sign in first"
      onCancel={() => dispatch(setCloseSignInFirstModal())}
      footer={[
        <div>
          <Button type="primary" loading={loading} onClick={handleOk} danger>
            Sign In Now
          </Button>
          <Button onClick={() => dispatch(setCloseSignInFirstModal())}>
            Not Now
          </Button>
        </div>,
      ]}
      open={openModal}
    >
      <p style={{fontSize:'15px', letterSpacing:'1px'}}>You need to sign In first...</p>
       
    </Modal>
  );
};

export default SignInFirstModal;
