import React from 'react';
import Sidebar from '@components/shared/sidebar';
import { Layout, Seo, Container } from '@components/shared';
import { useSiteMetadata } from '@hooks';
import { ProfileContent, General, Security } from '@components/profile-page';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
`;

const ProfilePage: React.FC = () => {
  const siteMetadata = useSiteMetadata();

  const [currentTabHeading, setCurrentTabHeading] = React.useState<string>(
    'General',
  );

  const menuItems = ['General', 'Security'];
  const content: any = [
    {
      heading: 'General',
      content: <General />,
    },
    {
      heading: 'Security',
      content: <Security />,
    },
  ];

  const handleItemClick = (e: React.SyntheticEvent) => {
    const heading = e.currentTarget.textContent;

    setCurrentTabHeading(heading || '');
  };

  return (
    <Layout>
      <Seo
        title="Privacy Policy"
        description={`Privacy Policy for the ${siteMetadata.title} website`}
        urlSlug="privacy/"
      />
      <Container>
        <ProfileContainer>
          <Sidebar handleItemClick={handleItemClick} items={menuItems} />
          <ProfileContent
            heading={currentTabHeading}
            content={
              content.find((c: any) => c.heading === currentTabHeading).content
            }
          />
        </ProfileContainer>
      </Container>
    </Layout>
  );
};

export default ProfilePage;
