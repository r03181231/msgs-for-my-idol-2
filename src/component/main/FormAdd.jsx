import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  __setletterCard,
  setLetterValue,
} from "../../redux/modules/letterSlice";
import { v4 as randomId } from "uuid";
import FormSelect from "./FormSelect";
import Button from "component/common/Button";
import { gettingLocal } from "component/common/localStorage";

const FormAdd = () => {
  const normalAvataUrl =
    "https://lh7-us.googleusercontent.com/MyS-PhOT-AvaQtCYXsr0oQPxakqvdc-s-QFcNZmCwd19fbYditWA_IwxeepE78dANxt04nEws75hrFfmqNuhJLx2EQxy_RSe8x6M7LcHGVjhzEkSpREFDhWljam2mdGNxes5xqoxP1sZpYijy3nTTXU";
  const dispatch = useDispatch();
  const { nickname, id } = gettingLocal("user") || {};
  const tabData = useSelector((store) => store.letter.tabData);
  const tab = useSelector((store) => store.letter.tab);
  let time = new Date().toISOString();
  const blankPattern = /^\s+|\s+$/g;
  const contentRef = useRef(null);
  const init = {
    id: randomId(),
    nickname: nickname,
    avatar: normalAvataUrl,
    content: "",
    writedTo: tab.writedTo,
    createdAt: time,
    userId: id,
  };
  const [addValue, setAddValue] = useState(init);
  const { content, writedTo } = addValue;
  // input 유효성
  const contentBlank = content.replace(blankPattern, "");
  // input 포커스
  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setAddValue({ ...addValue, [name]: value });
  };
  useEffect(() => {
    contentRef.current.focus();
  }, []);
  // 추가
  const onAddSubmit = async (e) => {
    e.preventDefault();

    if (contentBlank === "") {
      alert("내용을 전부 채워주세요.");
      return;
    }
    // 공백이면 아무 것도 리턴하지 않게 해줘.
    if (contentBlank === "") {
      alert("내용을 적어주세요.");
      contentRef.current.focus();
      return;
    }
    dispatch(__setletterCard(addValue));
    dispatch(setLetterValue(addValue));
    setAddValue(init);
    contentRef.current.focus();
  };

  return (
    <section>
      <form onSubmit={onAddSubmit}>
        <div>
          <label htmlFor="user-name">닉네임 :</label>
          <p>
            <span>{nickname}</span>
          </p>
        </div>
        <div>
          <label htmlFor="comment">내용 : </label>
          <input
            id="comment"
            type="text"
            name="content"
            value={content}
            ref={contentRef}
            maxLength={100}
            placeholder="최대 100글자까지만 작성할 수 있습니다."
            onChange={onChangeHandle}
          />
        </div>
        <FormSelect
          tabData={tabData}
          onChange={onChangeHandle}
          addValue={addValue}
          setAddValue={setAddValue}
        />
        <div>
          <Button name={"등록"} />
        </div>
      </form>
    </section>
  );
};

export default FormAdd;
