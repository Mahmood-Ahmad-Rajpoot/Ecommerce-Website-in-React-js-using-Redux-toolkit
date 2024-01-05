import { React, useState } from "react";
import { Button, Modal, Radio } from "antd";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../features/CartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { PlusOutlined } from "@ant-design/icons";
import { Alert, message  } from 'antd';
import { setCloseSignInFirstModal, setOpenSignInFirstModal } from "../../../../features/signInFirstModalSlice";
import SignInFirstModal from "../../../SignInFirstModal/SignInFirstModal";

const AddToCartBtn = () => {
  // redduxx setup
  const cart = useSelector((store) => store.cart);
  const { signIn } = useSelector((store) => store.signIn);

  const { product } = useSelector((store) => store.productDataSlice);
  const { openModal } = useSelector((store) => store.signInFirstModal);
   const dispatch = useDispatch();
  // cart quantity setup
  const [quantity, setQuantity] = useState(1);

  //   modal setup
  const [open, setOpen] = useState(false);
//   loading state 
const [loading, setLoading] = useState(false);

// success

//   message added to cart
const [messageApi, contextHolder] = message.useMessage();
const success = () => {
    messageApi.open({
      type: 'success',
      content: `successfully added ${quantity} items to cart...`,
    });
  };

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      success();

      
    }, 3000);
   
  };

  const handleCancel = (e) => {
     setOpen(false);
    setQuantity(1)
  };
  
  // handle cart button click

  const handleCart =() => {
if(signIn){
  handleOk();
  dispatch(addToCart({product:product, quantity:quantity}));
  setQuantity(1)
}
// if not sign in
else{
  dispatch(setOpenSignInFirstModal())

}
    

  }

  return (
    <>
   {signIn&& <SignInFirstModal/>}
      <Button
        icon={<ShoppingCartIcon />}
        style={{ height: "inherit" }}
        type="primary"
        onClick={showModal}
        block
      >
        ADD TO CART
      </Button>
      <Modal
     
      style={{height:'700px'}}
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
   
        cancelButtonProps={{
          disabled: true,
        }}
        footer={[
          <div className="w-100 d-flex justify-content-center ">
           
            <Button
              className="col-10"
              type="primary" danger
              loading={loading}
              onClick={handleCart}
              
            >
              Add To Cart
            </Button>
            
          </div>,
        ]}
      >
        {contextHolder}
        <div>
          <div className="d-flex mb-3">
            <img
              className="col-5 rounded-2 m-1"
              src={product.images[0]}
              width={""}
              alt={product.title}
            />
            <div className="col-7 m-1">
              <h5 className="mt-3">{product.title}</h5>
              <h6>
                <b>Rs. {product.price}</b>{" "}
              </h6>
              <h6>
                <b>Discount:</b> -{product.discountPercentage + "%"}{" "}
                <b className="text-danger">OFF</b>
              </h6>
            </div>
          </div>
          <hr />
          <div className="d-flex mx-2 justify-content-between align-items-center">
            <h6>
              <b>Quantity</b>
            </h6>
            <div className="d-flex gap-2 align-items-baseline  ">
              <Button
                danger
                disabled={quantity === 1}
                onClick={() => setQuantity(quantity - 1)}
                icon={<RemoveIcon />}
              ></Button>{" "}
              <h6 className="text-secondary ">{quantity}</h6>
              <Button
                type="primary"
                ghost
                disabled={quantity === product.stock}
                onClick={() => setQuantity(quantity + 1)}
                icon={<PlusOutlined />}
              ></Button>
            </div>
          </div>

          <hr />
        </div>

        
      </Modal>
    
    </>
  );
};

export default AddToCartBtn;
