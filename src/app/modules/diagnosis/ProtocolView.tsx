import { Box } from '@mui/material';
import { Container } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { useAppDispatch, useAppSelector } from 'app/hooks/hooks';
import { fetchData } from 'app/redux/protocol/protocolSlice';
import moment from 'moment';
import { useEffect } from 'react';

const ProtocolView = () => {
  const ProtocolList = useAppSelector((state) => state.protocolList.data.data || []);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const protocolColumns = [
    { field: 'clinicName', headerName: 'Clinic Name', width: 250 },
    { field: 'diagnosis', headerName: 'Protocol', width: 175 },
    { field: 'diagnosisName', headerName: 'Protocol Name', width: 130 },
    { field: 'version', headerName: 'Version', width: 100 },
    { field: 'effectiveDate', headerName: 'Effective Date', width: 150 },
  ];

  const protocolRows = ProtocolList.map((data, index) => {
    return {
      id: index,
      clinicName: data.clinic,
      diagnosis: data.name,
      diagnosisName: data.diagnosis,
      version: data.version,
      effectiveDate: moment(data.effectiveDate).format('D-MMMM-yy'),
    };
  });

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', height: 224 }}>
      <Container>
        <Box>
          <DataGrid
            rows={protocolRows}
            columns={protocolColumns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            autoHeight
            autoPageSize
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ProtocolView;
