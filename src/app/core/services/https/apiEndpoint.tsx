/* eslint-disable quotes */
export class ApiEndpoint {
    public static SIGN_IN: APIDef = {
      method: 'POST',
      api: () => `admin/login`,
    };
    public static GET_DIAGNOSIS: APIDef = {
      method: 'GET',
      api: () => `admin/diagnosis/`,
    };
    
  }
  


  
  export interface APIDef {
    method: string;
    api: (ApiInput : ApiInput) => string
  }
  
  export interface ApiInput {
    id?: string;
  }