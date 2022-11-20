import { Box } from '@mui/material';
import { Container } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { useAppDispatch, useAppSelector } from 'app/hooks/hooks';
import { fetchCountry } from 'app/redux/country/countrySlice';
import { useEffect } from 'react';

const CountryView = () => {
  const CountryList = useAppSelector((state) => state.countryList.data.data || []);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCountry());
  }, [dispatch]);

  console.log(CountryList);

  const countryColumns = [
    { field: 'id', headerName: 'CountryID', width: 300 },
    { field: 'code', headerName: 'Code', width: 130 },
    { field: 'name', headerName: 'Name', width: 200 },
  ];

  const countryRows = CountryList.map((data) => {
    return {
      id: data.id,
      code: data.code,
      name: data.name,
    };
  });

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', height: 224 }}>
      <Container>
        <Box>
          <DataGrid
            rows={countryRows}
            columns={countryColumns}
            getRowId={(row) => row.id}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            autoHeight
          />
        </Box>
      </Container>
    </Box>
  );
};

export default CountryView;
