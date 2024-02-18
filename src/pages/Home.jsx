import { useSelector } from "react-redux";
import HeadContents from "component/header/HeadContents.jsx";
import CardList from "component/main/CardList.jsx";
import FormAdd from "component/main/FormAdd.jsx";
import * as H from "../component/styles/StyledHome.jsx";

const Home = () => {
  const tabData = useSelector((store) => store.letter.tabData);
  const tab = useSelector((store) => store.letter.tab);

  return (
    <H.Layout>
      {/* tabNum, writeTo */}
      <HeadContents />
      {/* tab에 따라 보여주는 컴포넌트 */}
      {tabData.map((tabInfo) => {
        const { tabNum, writedTo } = tabInfo;
        return (
          tab.writedTo === writedTo && (
            <div key={tabNum}>
              <FormAdd />
              <CardList />
            </div>
          )
        );
      })}
    </H.Layout>
  );
};

export default Home;
