import React from "react";
import { ICONS } from "../../../../constants/icons";
import * as S from "./UserNavigation.style";

const { ProfileIcon, BookmarkIcon, SearchIcon } = ICONS;

const ICON_SIZE = 30;
// TODO: Watch video about svg

const UserNavigation = () => {
  return (
    <S.NavigationContainer>
      <S.NavigationLink to="/search">
        <SearchIcon style={{ width: ICON_SIZE, height: ICON_SIZE }} />
      </S.NavigationLink>
      <S.NavigationLink to="/bookmarks">
        <BookmarkIcon style={{ width: ICON_SIZE, height: ICON_SIZE }} />
      </S.NavigationLink>
      <S.NavigationLink to="/profile">
        <ProfileIcon style={{ width: ICON_SIZE, height: ICON_SIZE }} />
      </S.NavigationLink>
    </S.NavigationContainer>
  );
};

export default UserNavigation;
