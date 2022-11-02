import diagnosis from './diagnosis.json';
import { Clinic, Country, Protocol } from './diagnosis.types';

export const protocolColumns = [
  { field: 'id', headerName: 'ID', width: 300 },
  { field: 'diagnosis', headerName: 'Diagnosis', width: 130 },
  { field: 'name', headerName: 'Name', width: 200 },
];

export const protocolRows = diagnosis.protocol.map((protocol: Protocol) => {
  return { id: protocol.id, diagnosis: protocol.diagnosis, name: protocol.name };
});

export const countryColumns = [
  { field: 'id', headerName: 'ID', width: 300 },
  { field: 'code', headerName: 'Code', width: 130 },
  { field: 'name', headerName: 'Name', width: 200 },
];

export const countryRows = diagnosis.country.map((country : Country) => {
  return { id: country.id, code: country.code, name: country.name };
});

export const clinicColumns = [
  { field: 'id', headerName: 'ID', width: 300 },
  { field: 'name', headerName: 'Name', width: 300 },
  { field: 'countryId', headerName: 'Country ID', width: 300 },
  
];


export const clinicRows = diagnosis.country[0].clinics.map((clinics : Clinic) => {
  return { id: clinics.id, countryId: clinics.country_id, name: clinics.name };
});
