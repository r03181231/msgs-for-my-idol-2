// Detali.js
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLetterDelete } from "../redux/modules/letterSlice";
import EditDetail from "component/main/EditDetail";
import Button from "component/common/Button";
import { gettingLocal } from "component/common/localStorage";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = gettingLocal("user");
  const letterValue = useSelector((store) => store.letter.letterValue);
  const [isEdit, setIsEdit] = useState(false); // 수정 상태 , 저장
  const thisLetter = letterValue.filter((data) => data.id === id);
  const filterUserId = thisLetter.map((item) => item.userId);
  const currUserId = userId.id;
  const canUser = filterUserId[0] === currUserId;
  console.log(filterUserId[0]);
  console.log(canUser);

  const moveHomeNavigator = () => {
    navigate("/home", { replace: true });
  };

  const onEdit = () => {
    setIsEdit(true);
  };

  const onDelete = () => {
    // 삭제 유효성
    if (window.confirm("삭제하시겠습니까?") === true) {
      alert("삭제되었습니다.");
    } else {
      alert("삭제를 취소하셨습니다.");
      return;
    }

    dispatch(setLetterDelete(id));
    moveHomeNavigator();
  };

  return (
    <>
      {thisLetter && thisLetter.length > 0 ? (
        thisLetter.map((filterData) => {
          const { id, avatar, nickname, writedTo, content, createdAt } =
            filterData;
          return (
            <div key={id}>
              <Button name={"이전으로"} onClick={moveHomeNavigator} />

              <div>
                <img src={avatar} alt="dummyimage" />
                <ul>
                  <li>{nickname}</li>
                  <div>
                    To : <span>{writedTo}</span>
                  </div>
                  <p>
                    {new Date(createdAt).toLocaleDateString("ko-KR", {
                      year: "2-digit",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    })}
                  </p>
                </ul>
                {!isEdit ? (
                  <div>
                    <p>{content}</p>
                    {canUser && !isEdit ? (
                      <>
                        <Button name={"수정"} onClick={onEdit} />
                        <Button name={"삭제"} onClick={onDelete} />
                      </>
                    ) : null}
                  </div>
                ) : (
                  <EditDetail
                    setIsEdit={setIsEdit}
                    filterData={filterData}
                    letterValue={letterValue}
                  />
                )}
              </div>
            </div>
          );
        })
      ) : (
        <div>
          정보를 불러오는 중에 문제가 발생했습니다. 홈화면으로 이동해여 새로고침
          해 주세요.
        </div>
      )}
    </>
  );
};

export default Detail;
