import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  clearLocal,
  gettingLocal,
  settingLocal,
} from "component/common/localStorage";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Layout = () => {
  const navigate = useNavigate();
  const { data, status } = useSelector((store) => store.users.userData);
  const token = gettingLocal("token");

  const userInfo = {
    id: data?.userId,
    nickname: data?.nickname,
    avatar: data?.avatar,
    success: data?.success,
  };
  if (!token) {
    alert("다시 로그인 해주세요!");
    navigate("/", { replace: true });
  }
  const onLogout = () => {
    clearLocal("token");
    alert("로그아웃 되셨습니다!");
    navigate("/", { replace: true });
  };
  console.log(userInfo);
  useEffect(() => {
    settingLocal("user", userInfo);
  }, []);

  return (
    <div>
      <Header>
        <Link to="/home">HOME</Link>
        <ProfileLogoutNav>
          <Link to="/myprofile">
            <p>내&nbsp;프로필</p>
          </Link>
          <LogoutBtn onClick={onLogout}>로그아웃</LogoutBtn>
        </ProfileLogoutNav>
      </Header>
      <Outlet />
    </div>
  );
};

export default Layout;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px;
`;

export const ProfileLogoutNav = styled.nav`
  display: flex;
  align-items: center;

  gap: 20px;
`;

export const LogoutBtn = styled.button``;
