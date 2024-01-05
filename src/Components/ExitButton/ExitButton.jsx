import React from "react";
import { IconButton } from "@mui/material";

import { useNavigate } from "react-router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const ExitButton = () => {
  const navigate = useNavigate();

  // info message
  const [modal, contextHolder] = Modal.useModal();
  const confirm = () => {
    modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: "Are you sure you want to exit...?",
      okText: "Exit",
      cancelText: "Cancel",
      onOk() {
        setTimeout(() => navigate(-1),1500);
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1500);
        }).catch();
      },
      onCancel() {},
    });
  };
  return (
    <div>
      <IconButton className=" " onClick={confirm} size="large">
        <ArrowBackIosIcon
          style={{ paddingLeft: "10px", color: "black" }}
          fontSize="large"
        />
      </IconButton>
      {contextHolder}
    </div>
  );
};

export default ExitButton;
