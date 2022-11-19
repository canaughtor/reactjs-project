import { Box, Tab, Tabs } from '@mui/material';
import { Container } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { useAppDispatch, useAppSelector } from 'app/hooks/hooks';
import { fetchData } from 'app/redux/diagnosis/dataSlice';
import React, { useEffect } from 'react';
import { TabPanel, a11yProps } from './TabPanel';

const DataView = () => {
  const ClinicList = useAppSelector((state) => state.clinicList.data.data || []);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log(ClinicList);

  const protocolColumns = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'clinicName', headerName: 'Clinic Name', width: 200 },
    { field: 'diagnosis', headerName: 'Protocol', width: 130 },
    { field: 'diagnosisName', headerName: 'Protocol Name', width: 130 },
    { field: 'version', headerName: 'Version', width: 130 },
    { field: 'effectiveDate', headerName: 'Effective Date', width: 130 },
  ];

  const protocolRows = ClinicList.map((data)  => {
    return {
      id: data.id,
      clinicName: data.clinic,
      diagnosis: data.name,
      diagnosisName: data.diagnosis,
      version: data.version,
      effectiveDate: data.effectiveDate,
    }
  });

  // const countryColumns = [
  //   { field: 'id', headerName: 'ID', width: 300 },
  //   { field: 'code', headerName: 'Code', width: 130 },
  //   { field: 'name', headerName: 'Name', width: 200 },
  // ];

  // const countryRows = clinicData.map((data) => {
  //   return {
  //     id: data.country.id,
  //     code: data.country.code,
  //     name: data.country.name
  //   }
  // })

  // const clinicColumns = [
  //   { field: 'id', headerName: 'ID', width: 300 },
  //   { field: 'name', headerName: 'Name', width: 300 },
  //   { field: 'countryName', headerName: 'Country Name', width: 300 },
  // ];

  // const clinicRows = clinicData.map((data) => {
  //   return {
  //     id: data.country.clinics.id,
  //     name: data.country.clinics.name,
  //     countryName: data.country.name
  //   }
  // })

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
              getRowId={row => row.id}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box style={{ height: 400, width: '100%' }}>
            {/* <DataGrid
              rows={countryRows}
              columns={countryColumns}
              getRowId={(row) => row.id}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            /> */}
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box style={{ height: 400, width: '100%' }}>
            {/* <DataGrid
              rows={clinicRows}
              columns={clinicColumns}
              getRowId={(row) => row.id}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            /> */}
          </Box>
        </TabPanel>
      </Container>
    </Box>
  );
};

export default DataView;
