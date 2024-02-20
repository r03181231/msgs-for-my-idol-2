import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { clearLocal, removeLocal } from "component/common/localStorage";
import styled from "styled-components";

const Layout = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    clearLocal("token");
    alert("로그아웃 되셨습니다!");
    navigate("/");
  };
  return (
    <div>
      <Header>
        <Link to="/home">HOME</Link>
        <ProfileLogoutNav>
          <Link>
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
