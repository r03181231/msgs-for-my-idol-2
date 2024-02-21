import React, { useEffect, useState } from "react";
import defaultImage from "assets/images/user-defult-avatar.png";
import Button from "component/common/Button";
import useInputs from "component/hook/useInputs";
import { useDispatch, useSelector } from "react-redux";
import {
  __patchProfile,
  setSelectFile,
  setThumnailImg,
  setUserInfo,
} from "../redux/modules/authSlice";
import { gettingLocal } from "component/common/localStorage";

const MyProfile = () => {
  const dispatch = useDispatch();
  const userInfo = gettingLocal("user");
  const selectFile = useSelector((store) => store.users.selectFile);
  const thumnailImg = useSelector((store) => store.users.thumnailImg);
  const { id, nickname, avatar, success } = useSelector(
    (store) => store.users.userInfo
  );
  const [isEdit, setIsEdit] = useState(false);
  const [editNickname, setEditNickname, onChange, reset] = useInputs({
    userNickname: nickname,
  });
  const editUserNickname = editNickname.userNickname;

  useEffect(() => {
    dispatch(setUserInfo(userInfo));
  }, []);

  const onClickEdit = () => {
    setIsEdit(true);
    setEditNickname({ userNickname: nickname });
  };

  const onEditSave = () => {
    //유효성
    const editSaveCheck = window.confirm("수정내용을 저장하시겠습니까?");

    if (editSaveCheck === false) {
      alert("수정을 취소하셨습니다.");
      setIsEdit(false);
      return;
    }
    // 이미지파일을 FormData에 담는 방법
    const formData = new FormData();
    // avatar와 nickname 중 하나 또느 모두 변경 가능
    formData.append("avatar", avatar);
    formData.append("nickname", nickname);
    dispatch(__patchProfile(formData));

    dispatch(
      setUserInfo({
        id,
        nickname: editUserNickname,
        avatar: selectFile,
        success,
      })
    );
    setIsEdit(false);
  };
  const addImgeFile = (e) => {
    const imgFile = e.target.files[0];
    if (imgFile) {
      const reader = new FileReader();
      reader.readAsDataURL(imgFile);
      reader.onloadend = () => {
        dispatch(setSelectFile(reader.result));
        dispatch(setThumnailImg(reader.result));
      };
    }
  };

  const onEditCancel = () => {
    alert("수정을 취소하셨습니다.");
    // if (isEdit && selectFile !== thumnailImg) dispatch(setThumnailImg(image));
    setIsEdit(false);
  };
  return (
    <div>
      <h1>프로필 관리</h1>
      <form>
        <label htmlFor="selectFile">
          <img
            src={thumnailImg ? thumnailImg : defaultImage}
            alt="기본이미지"
          />
          <input
            type="file"
            accept="image/*"
            id="selectFile"
            onChange={addImgeFile}
          />
        </label>
        {isEdit ? (
          <input
            type="text"
            name="userNickname"
            minLength={1}
            maxLength={15}
            value={editUserNickname}
            onChange={onChange}
          />
        ) : (
          <p>닉네임 : {nickname}</p>
        )}
        <p>userId : {id}</p>
        {isEdit ? (
          <div>
            <Button name={"취소"} onClick={onEditCancel} />
            <Button name={"수정완료"} onClick={onEditSave} />
          </div>
        ) : (
          <Button name="수정하기" onClick={onClickEdit} />
        )}
      </form>
    </div>
  );
};

export default MyProfile;
