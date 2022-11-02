// import { useEffect } from 'react';
// import { useAppSelector, useAppDispatch } from 'app/hooks/hooks';
// import { fetchData } from './dataSlice';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import {
  clinicColumns,
  clinicRows,
  countryColumns,
  countryRows,
  protocolColumns,
  protocolRows,
} from './fakedata';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const DataView = () => {
  // const clinicData = useAppSelector((state) => {
  //   state.clinicData.data;
  // });
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(fetchData());
  // }, []);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
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
      <Container maxWidth='lg'>
        <TabPanel value={value} index={0}>
          <Box style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={protocolRows}
              columns={protocolColumns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={countryRows}
              columns={countryColumns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={clinicRows}
              columns={clinicColumns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </Box>
        </TabPanel>
      </Container>
    </Box>
  );
};

export default DataView;
