import React from 'react';
import styled from 'styled-components';
import Avatar from '@images/default-avatar-image.png';

interface Props {
  handleItemClick: Function;
  items: string[];
}

const Container = styled.div`
  color: blue;
  height: 500px;
  border: 1px solid lightgray;
  max-width: 200px;
  flex: 1;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const ProfileSummary = styled.div`
  color: black;
  text-align: center;
  margin-top: 20px;
`;

const ProfileImage = styled.img`
  max-width: 128px;
  max-height: 128px;
  border-radius: 100px;
`;

const Username = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const MenuItemContainer = styled.div`
  margin-top: 20px;
`;

const MenuItem = styled.div`
  color: ${({ theme }) => theme.colors.highlight};
  padding: 5px 15px;

  :hover {
    background: ${({ theme }) => theme.colors.shadow};
    cursor: pointer;
  }
`;

const Sidebar: React.FC<Props> = ({ handleItemClick, items }) => {
  const menuItems = items.map((i) => (
    <MenuItem key={i} onClick={(e: any) => handleItemClick(e)}>
      {i}
    </MenuItem>
  ));

  return (
    <Container>
      <ProfileSummary>
        <ProfileImage src={Avatar} />
        <Username>Unicorn91</Username>
      </ProfileSummary>
      <MenuItemContainer>{menuItems}</MenuItemContainer>
    </Container>
  );
};

export default Sidebar;
