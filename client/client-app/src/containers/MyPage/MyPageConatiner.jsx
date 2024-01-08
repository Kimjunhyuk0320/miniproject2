import React, { useState, useEffect, useContext } from "react";
import MyPage from "../../components/Mypage/MyPage";
import * as userAuth from "../../apis/users/userAuth";
import { LoginContext } from "../../contexts/LoginContextProvider";
import { useNavigate } from "react-router-dom";

const MyPageConatiner = () => {
  const { isLogin, roles, logout, userInfo } = useContext(LoginContext);
  const navigate = useNavigate();
  const [info, setInfo] = useState()
  const [file, setFile] = useState(null);
  const [fileSource, setFileSource] = useState("");
  const [fileName, setFileName] = useState("");

  // 회원 정보 조회 - /MyPage
  const getUserInfo = async () => {
    const response = await userAuth.userInfo()
    const data = await response.data
    setInfo(data)

    if (!userInfo) {
      navigate("/login");
      return;
    }
    if (Object.keys(userInfo).length === 0) {
      return;
    }
    if (!(!roles.isUser || roles.isBand || !roles.isClub)) {
      alert("권한이 설정 되어있지 않아 접근할 수 없습니다.");
      navigate("/liveBoard");
      return;
    }
  };

  useEffect(() => {
    getUserInfo();
  }, [userInfo, isLogin]);

  const sets = {
    file,
    setFile,
    fileSource,
    setFileSource,
    fileName,
    setFileName,
  };

  return (
    <MyPage isLogin={isLogin} sets={sets} userInfo={info} roles={roles} />
  );
};

export default MyPageConatiner;
