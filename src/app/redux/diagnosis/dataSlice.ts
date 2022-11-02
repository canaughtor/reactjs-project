import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RestApiService } from 'app/core/services/https/restApiService';
import { ApiEndpoint } from 'app/core/services/https/apiEndpoint';
import { State } from './diagnosis.types';



const initialState: State = {
  loading: false,
  data: { protocol: [], country: [] },
  error: '',
};

const restApiService = new RestApiService()

export const fetchData = createAsyncThunk('data/fetchdata', () => {
return restApiService.invoke(ApiEndpoint.GET_DIAGNOSIS)?.then((response) => {response.data})
});

const dataSlice = createSlice({
  name: 'clinicData',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default dataSlice.reducer;
