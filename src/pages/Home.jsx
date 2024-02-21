import { useDispatch, useSelector } from "react-redux";
import { gettingLocal } from "component/common/localStorage.js";
import { useNavigate } from "react-router-dom";
import { __getUserInfo } from "../redux/modules/authSlice.js";
import HeadContents from "component/header/HeadContents.jsx";
import CardList from "component/main/CardList.jsx";
import FormAdd from "component/main/FormAdd.jsx";
import * as H from "../component/styles/StyledHome.jsx";
import { __getletterCards } from "../redux/modules/letterSlice.js";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((store) => store.letter.error);
  const token = gettingLocal("token");

  if (error || !token) {
    alert("로그인을 다시 해주세요!");
    navigate("/", { replace: true });
  }
  useEffect(() => {
    dispatch(__getletterCards());
  }, []);

  return (
    <H.Layout>
      {/* tabNum, writeTo */}
      <HeadContents />
      {/* tab에 따라 보여주는 컴포넌트 */}
      <FormAdd />
      <CardList />
    </H.Layout>
  );
};

export default Home;

// {
//   tabData.map((tabInfo) => {
//     const { tabNum, writedTo } = tabInfo;
//     return tab.writedTo === writedTo && <div key={tabNum}></div>;
//   });
// }

// const tabData = useSelector((store) => store.letter.tabData);
// const tab = useSelector((store) => store.letter.tab);
