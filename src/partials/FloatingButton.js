import {MenuOutlined} from "@ant-design/icons";
import {FloatButton} from "antd";
import {FaHome, FaRaspberryPi} from "react-icons/fa";
import {MdContactPage} from "react-icons/md";
import React from "react";

export default function FloatingButton() {
    return (<FloatButton.Group
        trigger={"hover"}
        type={"primary"}
        style={{top: 50, bottom:700}}
        icon={<MenuOutlined/>}
    >
        <FloatButton href={"/projects"} icon={<FaRaspberryPi style={{marginRight: '10px', marginBottom: '5'}}/>}/>
        <FloatButton href={"/"} icon={<FaHome style={{marginRight: '10px', marginBottom: '5'}}/>}/>
        <FloatButton href={"/contactMe"} icon={<MdContactPage style={{marginRight: '10px', marginBottom: '5'}}/>}/>
    </FloatButton.Group>)
}