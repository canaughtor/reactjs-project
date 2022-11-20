import { Box, Container, Tab, Tabs } from '@mui/material';
import React from 'react';
import CountryView from '../country/CountryView';
import ProtocolView from '../diagnosis/ProtocolView';
import { TabPanel, a11yProps } from './TabPanel';

const LeftTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, display: 'flex', height: 224 }}>
        <Tabs
          orientation='vertical'
          variant='scrollable'
          value={value}
          onChange={handleChange}
          textColor='secondary'
          indicatorColor='secondary'
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label='Protocol List' {...a11yProps(0)} />
          <Tab label='Country List' {...a11yProps(1)} />
          <Tab label='Clinic List' {...a11yProps(2)} />
        </Tabs>
        <Container>
          <Box>
            <TabPanel value={value} index={0}>
              <ProtocolView />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <CountryView />
            </TabPanel>
            <TabPanel value={value} index={2}></TabPanel>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default LeftTab;
