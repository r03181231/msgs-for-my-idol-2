import { useDispatch, useSelector } from "react-redux";
import { setActiveTab, setTab } from "../../redux/modules/letter";
import * as S from "../styles/StyledTabMenu";

const TabMenu = () => {
  const dispatch = useDispatch();
  const tabData = useSelector((store) => store.letter.tabData);
  const activeTab = useSelector((store) => store.letter.activeTab);

  const onClickTabChange = (tabInfomation) => {
    dispatch(setTab(tabInfomation));
    dispatch(setActiveTab(tabInfomation));
  };

  return (
    <S.Nav>
      <S.UlArtistName>
        {tabData.map((tabItem) => {
          const { tabNum, writedTo } = tabItem;
          return (
            <S.Li
              id={tabNum}
              $isactive={activeTab.tabNum}
              key={tabNum}
              onClick={() => onClickTabChange(tabItem)}
            >
              {writedTo}
            </S.Li>
          );
        })}
      </S.UlArtistName>
    </S.Nav>
  );
};

export default TabMenu;
