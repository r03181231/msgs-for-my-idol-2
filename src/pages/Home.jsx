import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { gettingLocal } from "component/common/localStorage.js";
import { __getletterCards } from "../redux/modules/letterSlice.js";
import { __getUserInfo } from "../redux/modules/authSlice.js";
import HeadContents from "component/header/HeadContents.jsx";
import CardList from "component/main/CardList.jsx";
import FormAdd from "component/main/FormAdd.jsx";
import * as H from "../component/styles/StyledHome.jsx";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, errorStatus, errorMessage } = useSelector(
    (store) => store.users
  );
  const token = gettingLocal("token");

  if (!token) {
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
