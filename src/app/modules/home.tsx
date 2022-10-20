import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component='a'
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs indicatorColor='secondary' textColor='secondary' value={value} onChange={handleChange} aria-label='nav tabs example'>
        <LinkTab label='Home' href='/home' />
        <LinkTab label='Users' href='/users' />
        <LinkTab label='Clinic Data' href='/clinic-data' />
      </Tabs>
    </Box>
  );
};

export default Home;
