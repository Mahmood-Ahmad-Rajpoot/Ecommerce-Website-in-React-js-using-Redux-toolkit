import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "antd";
import { closeLogOutModal, setSignOut } from "../../features/signInSlice";
const LogOutModal = () => {
  const { signIn,logOutModal } = useSelector((store) => store.signIn);
   const dispatch = useDispatch();
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      dispatch(closeLogOutModal());
      dispatch(setSignOut())
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    dispatch(closeLogOutModal());
};
  return (
    <Modal
      title="Log Out"
      open={logOutModal}
      confirmLoading={confirmLoading}
      okText="Log Out"
      cancelText="Cancel"
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p style={{ fontSize: "15px", letterSpacing: "1px" }}>
        {" "}
        Do you really want to log out ?
      </p>
    </Modal>
  );
};

export default LogOutModal;
