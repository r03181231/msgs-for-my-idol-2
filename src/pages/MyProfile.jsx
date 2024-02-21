import React, { useState } from "react";
import defaultImage from "assets/images/user-defult-avatar.png";
import Button from "component/common/Button";
import useInputs from "component/hook/useInputs";

const MyProfile = () => {
  const dafaultUser = {
    image: defaultImage,
    nickname: "ㅎㅎ",
    userId: "south1234",
  };
  const nickname = dafaultUser.nickname;
  const image = dafaultUser.image;
  const userId = dafaultUser.userId;
  const [isEdit, setIsEdit] = useState(false);
  const [editNickname, setEditNickname, onChange, reset] = useInputs({
    userNickname: nickname,
  });
  const editUserNickname = editNickname.userNickname;
  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onEditSave = () => {
    //유효성
    const editSaveCheck = window.confirm("수정내용을 저장하시겠습니까?");
    if (editSaveCheck === true && editUserNickname === nickname) {
      alert("아무런 수정사항이 없습니다.");
      return;
    }
    if (editSaveCheck === false) {
      alert("수정을 취소하셨습니다.");
      setIsEdit(false);
      return;
    }

    const editData = dafaultUser.map((userInfo) => {
      if (userInfo.id === userId) {
        return {
          ...userInfo,
          nickname: editUserNickname,
        };
      }
      return userInfo;
    });

    // dispatch(setLetterEdit(editData));
    // dispatch(__patchLetterCard(editData));
    alert("내용을 수정하셨습니다.");
    setIsEdit(false);
  };

  const onEditCancel = () => {
    alert("수정을 취소하셨습니다.");
    setIsEdit(false);
  };
  return (
    <div>
      <h1>프로필 관리</h1>
      <img src={image ?? defaultImage} alt="기본이미지" />
      {isEdit ? (
        <input
          type="text"
          name="editNickname"
          value={editUserNickname}
          onChange={onChange}
        />
      ) : (
        <p>닉네임 : {nickname}</p>
      )}
      <p>userId : {userId}</p>
      {isEdit ? (
        <div>
          <Button name={"취소"} onClick={onEditCancel} />
          <Button name={"수정완료"} onClick={onEditSave} />
        </div>
      ) : (
        <Button name="수정하기" onClick={onClickEdit} />
      )}
    </div>
  );
};

export default MyProfile;
