import React, { useCallback, useState } from "react";
import Styles from "./Profile.module.css";
import ChooseCountry from "./ChooseCountry";
import { Button, Typography } from "@mui/material";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setEdit, updateProfileData } from "../../features/signUp";
import { message, Spin } from "antd";

const ProfileDetails = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // handlers
  // success message
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "Profile Updated",
      content: "Your changes have successfully saved",
    });
  };
  // handler click save button
  const handleSaveBtn = () => {
    dispatch(updateProfileData(inputValues));
    setLoading(true);
    setTimeout(() => {
      dispatch(setEdit());
      setLoading(false);
      success();
    }, 2000);
  };
  const profileDetails = useSelector((store) => store.signUp);
  const {
    edit,
    name,
    email,
    password,
    pinCode,
    address,
    city,

    bankNumber,
    bankName,
    IFCScode,
  } = profileDetails;
  const [inputValues, setInputValues] = useState({
    name: name,
    password: password,

    email: email,
    city: city,
    IFCScode: IFCScode,
    bankName: bankName,
    bankNumber: bankNumber,
    pinCode: pinCode,
    address: address,
  });
  // setting data in the state object
  const handleInputChange = useCallback((fieldName, event) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [fieldName]: event.target.value,
    }));
  }, []);
 
  let saveBtn;
  if (edit) saveBtn = "flex";
  else saveBtn = "none";
  return (
    <div>
      <Spin size="large" tip="saving..." spinning={loading}>
        {contextHolder}
        <Typography className=" mb-4 " variant="h5" fontWeight="800">
          Personal Details
        </Typography>
        <Typography
          className={Styles.textStyles + " mb-1  "}
          variant="p"
          fontWeight="500"
        >
          Name
        </Typography>
        <Input
          value={inputValues.name}
          onChange={(e) => handleInputChange("name", e)}
          disabled={edit === false}
          name="name"
          className={Styles.fields}
          fullWidth
        />
        <Typography
          className={Styles.textStyles + " mb-1  "}
          variant="p"
          fontWeight="500"
        >
          Email
        </Typography>
        <Input
          value={inputValues.email}
          onChange={(e) => handleInputChange("email", e)}
          disabled={edit === false}
          name="email"
          className={Styles.fields}
          fullWidth
        />
        <Typography
          className={Styles.textStyles + " mb-1  "}
          variant="p"
          fontWeight="500"
        >
          Password
        </Typography>
        <Input.Password
          value={inputValues.password}
          onChange={(e) => handleInputChange("password", e)}
          disabled={edit === false}
          name="password"
          className={Styles.fields}
        />

        <hr></hr>

        {/* business details */}
        <Typography className="mb-4 mt-5" variant="h5" fontWeight="800">
          Business Address Details
        </Typography>
        <Typography
          className={Styles.textStyles + " mb-1  "}
          variant="p"
          fontWeight="500"
        >
          Pincode
        </Typography>
        <Input
          value={inputValues.pinCode}
          onChange={(e) => handleInputChange("pinCode", e)}
          disabled={edit === false}
          name="pincode"
          className={Styles.fields}
          fullWidth
        />
        <Typography className=" mb-1 " variant="p" fontWeight="500">
          Address
        </Typography>
        <Input
          value={inputValues.address}
          onChange={(e) => handleInputChange("address", e)}
          disabled={edit === false}
          name="address"
          className={Styles.fields}
          fullWidth
        />
        <Typography className=" mb-1 " variant="p" fontWeight="500">
          City
        </Typography>
        <Input
          value={inputValues.city}
          onChange={(e) => handleInputChange("city", e)}
          disabled={edit === false}
          name="city"
          className={Styles.fields}
          fullWidth
        />
        <Typography className=" mb-1 " variant="p" fontWeight="500">
          State
        </Typography>
        <ChooseCountry edit={edit} />
        <hr className="mt-5" />
        {/* Bank Details */}
        <Typography className=" mb-4 mt-5 " variant="h5" fontWeight="800">
          Bank Account Details
        </Typography>

        <Typography className=" mb-1 " variant="p" fontWeight="500">
          Bank Account Number
        </Typography>

        <Input
          value={inputValues.bankNo}
          onChange={(e) => handleInputChange("bankNumber", e)}
          disabled={edit === false}
          name="BankNo"
          className={Styles.fields}
          fullWidth
        />
        <Typography className=" mb-1 " variant="p" fontWeight="500">
          Account Holder's Name
        </Typography>
        <Input
          value={inputValues.accountHolder}
          onChange={(e) => handleInputChange("bankName", e)}
          disabled={edit === false}
          name="accountHolder"
          className={Styles.fields}
          fullWidth
        />
        <Typography className=" mb-1 " variant="p" fontWeight="500">
          IFCS Code
        </Typography>
        <Input
          value={inputValues.ifcs}
          onChange={(e) => handleInputChange("IFCScode", e)}
          disabled={edit === false}
          name="IFCS"
          className={Styles.fields}
          fullWidth
        />

        <Button
          disabled={edit === false}
          style={{
            backgroundColor: "#F83758",
            height: "3.2rem",
            marginBottom: "2.5rem",
          }}
          variant="contained"
          fullWidth
          onClick={handleSaveBtn}
        >
          Save
        </Button>
      </Spin>
    </div>
  );
};

export default ProfileDetails;
