import React, { useState, useEffect, useContext } from "react";
import FacilityRentalInsert from "../../components/facilityRental/FacilityRentalInsert";
import { useNavigate } from "react-router-dom";
import * as frApi from "../../apis/facilityRental/facilityRentalApi";
import { LoginContext } from "../../contexts/LoginContextProvider";

const FacilityRentalInsertContainer = () => {
  const { isLogin, roles, userInfo } = useContext(LoginContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("0");
  const [location, setLocation] = useState("경기");
  const [address, setAddress] = useState("");
  const [liveDate, setLiveDate] = useState("");
  const [account1, setAccount1] = useState("신한은행");
  const [account2, setAccount2] = useState("");
  const [file, setFile] = useState([]);

  const username = userInfo.username;
  const phone = userInfo.phone;
  const writer = userInfo.nickname;

  const navi = useNavigate();

  const insertHandler = async () => {
    function check(regExp, element, msg) {
      if (regExp.test(element)) {
        return true;
      }
      alert(msg);
      return false;
    }

    let msg = "";

    let titleCheck = /^.{3,45}$/;
    msg = "제목은 3 ~ 45 글자 사이로 작성해주십시오.";
    if (!check(titleCheck, title, msg)) return;

    let addressCheck = /^.{5,20}$/;
    msg = "주소는 5 ~ 20 글자 사이로 작성해주십시오.";
    if (!check(addressCheck, address, msg)) return;

    let account2Check = /^.{10,20}$/;
    msg = "계좌번호는 알맞은 형태로 작성해주십시오.";
    if (!check(account2Check, account2, msg)) return;

    let priceCheck = /^\d{1,8}$/;
    msg = "가격은 8자릿수 안의 정수로 입력해주십시오";
    if (!check(priceCheck, price, msg)) return;

    if (!window.confirm(`대관게시글 등록을 완료하시겠습니까?`)) return;
    const response = await frApi.frInsert(sets);
    // console.log(response)
    const data = await response.data;
    // console.log(data)
    if (data != null) {
      navi(`/fr/${data}`);
    } else {
      navi(`/fr/insert`);
    }
  };

  const sets = {
    setTitle,
    setContent,
    setLocation,
    setAddress,
    setLiveDate,
    setPrice,
    setAccount1,
    setAccount2,
    setFile,
    title,
    content,
    location,
    address,
    liveDate,
    price,
    account1,
    account2,
    insertHandler,
    file,
    username,
    phone,
    writer,
  };

  // 회원 정보 조회 - /MyPage
  const getUserInfo = async () => {
    if (!userInfo) {
      navi("/login");
      return;
    }
    if (Object.keys(userInfo).length === 0) {
      return;
    }

    if (!(roles.isUser || !roles.isBand || roles.isClub)) {
      alert("권한이 설정 되어있지 않아 접근할 수 없습니다.");
      navi("/liveBoard");
      return;
    }
    return true;
  };

  useEffect(() => {
    // console.log(`useEffect start`)
    // getRreqList();

    // 관한 설정 관련
    getUserInfo();
  }, [isLogin, userInfo]);

  return (
    <>
      <FacilityRentalInsert sets={sets}></FacilityRentalInsert>
    </>
  );
};

export default FacilityRentalInsertContainer;
