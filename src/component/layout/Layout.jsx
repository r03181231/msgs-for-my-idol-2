import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <div>
      <header>
        <Link to="/home">HOME</Link>
        <ProfileLogoutNav>
          <Link>
            <p>내&nbsp;프로필</p>
          </Link>
          <LogoutBtn>로그아웃</LogoutBtn>
        </ProfileLogoutNav>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;

export const ProfileLogoutNav = styled.nav``;

export const LogoutBtn = styled.button``;
