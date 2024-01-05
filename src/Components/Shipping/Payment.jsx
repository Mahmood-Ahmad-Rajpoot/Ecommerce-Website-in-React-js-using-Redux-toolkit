import { Button } from "antd";
import React from "react";
import { ConfigProvider, Radio, Space } from "antd";
import { applePayment, maestro, paypal, visa } from "../../assets";
import Styles from "./Shipping.module.css";
import PaymentSuccess from "./PaymentSuccess";
const Payment = () => {
  return (
    <div className="col-12  d-flex flex-column gap-4  align-items-center ">
      <div className="col-12 col-lg-8 col-md-10 col-sm-12 px-4">
        <div className="col-12 ">
          <ConfigProvider
            theme={{
                token:{
                    colorPrimaryActive:'#F83758'
                }
                ,
                components:{
                    Radio:{
                        buttonCheckedBg:'#f4f4f4'
                    }

                }
            }}
          >
            <Radio.Group className="col-12  " defaultValue="a">
              <Space className="col-12" direction="vertical">
                <Radio.Button className={Styles.radioStyle} value="a">
                  <div className={Styles.paymentDiv}>
                    <img src={visa} /> <div>*********12587</div>
                  </div>
                </Radio.Button>
                <Radio.Button className={Styles.radioStyle} value="b">
                  <div className={Styles.paymentDiv}>
                    <img src={maestro} /> <div>*********12587</div>
                  </div>
                </Radio.Button>
                <Radio.Button className={Styles.radioStyle} value="c">
                  <div className={Styles.paymentDiv}>
                    <img src={applePayment} /> <div>*********12587</div>
                  </div>
                </Radio.Button>
                <Radio.Button className={Styles.radioStyle} value="d">
                  <div className={Styles.paymentDiv}>
                    <img src={paypal} /> <div>*********12587</div>
                  </div>
                </Radio.Button>
              </Space>
            </Radio.Group>
          </ConfigProvider>
        </div>
      <PaymentSuccess/>
        
      </div>
    </div>
  );
};

export default Payment;
