import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RestApiService } from 'app/core/services/https/restApiService';
import { ApiEndpoint } from 'app/core/services/https/apiEndpoint';
import { Diagnosis, State } from './diagnosis.types';

const initialState: State = {
  loading: false,
  data: {
    data: [
      {
        id: '',
        name: '',
        diagnosisId: '',
        diagnosis: '',
        clinic: '',
        country: '',
        version: '',
        effectiveDate: '',
      },
    ],
  },
  error: '',
};

const restApiService = new RestApiService();

export const fetchData = createAsyncThunk('data/fetchdata', async () => {
  const response = await restApiService.invoke(ApiEndpoint.GET_DIAGNOSIS);
  return response?.data;
});

const dataSlice = createSlice({
  name: 'clinicList',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action: PayloadAction<Diagnosis>) => {
      state.loading = false;
      state.data.data = action.payload.data;
      state.error = '';
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default dataSlice.reducer;
