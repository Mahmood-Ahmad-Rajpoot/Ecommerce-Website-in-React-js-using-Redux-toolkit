import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/CartSlice";
 
const CLearCartModal = () => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
      dispatch(clearCart());

    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  return (
   
      <>
      <div className="col-10 m-2"><Button danger type="primary" block onClick={showModal}>
      Clear Cart
      </Button></div>
      
      <Modal footer={
        <div className="w-100 d-flex justify-content-around"><Button onClick={handleCancel} className="col-4" >Cancel</Button><Button onClick={handleOk} className="col-4" type="primary" danger >Clear</Button></div>
      } title=" Clear Cart"  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Do you Really Want to clear the cart..?</p>
        
      </Modal>
    </>
  
  );
};

export default CLearCartModal;
