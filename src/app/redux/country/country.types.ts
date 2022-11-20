export interface CountryState {
    loading: boolean;
    data: Country;
    error: string;
  }
  
  export interface Country {
    data: {
      id: string;
      name: string;
      code: string;
      status: boolean;
      dialCode: string;
    }[];
  }