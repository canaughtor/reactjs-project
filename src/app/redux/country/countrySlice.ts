import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RestApiService } from 'app/core/services/https/restApiService';
import { ApiEndpoint } from 'app/core/services/https/apiEndpoint';
import { Country, CountryState } from './country.types';


const initialState: CountryState = {
  loading: false,
  data: {
    data: [
      {
        id: '',
        name: '',
        code: '',
        status: false,
        dialCode: '',
      },
    ],
  },
  error: '',
};

const restApiService = new RestApiService();

export const fetchCountry = createAsyncThunk('data/fetchdata', async () => {
  const response = await restApiService.invoke(ApiEndpoint.GET_COUNTRY);
  return response?.data;
});

const countrySlice = createSlice({
  name: 'countryList',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountry.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCountry.fulfilled, (state, action: PayloadAction<Country>) => {
      state.loading = false;
      state.data.data = action.payload.data;
      state.error = '';
    });
    builder.addCase(fetchCountry.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default countrySlice.reducer;
