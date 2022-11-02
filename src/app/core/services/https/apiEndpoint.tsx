/* eslint-disable quotes */
export class ApiEndpoint {
    public static SIGN_IN: APIDef = {
      method: 'POST',
      api: () => `admin/login`,
    };
    public static GET_DIAGNOSIS: APIDef = {
      method: 'GET',
      api: () => `v2/diagnosis`,
    };
    
  }
  


  
  export interface APIDef {
    method: string;
    api: any;
  }
  
  export interface ApiInput {
    id?: any;
  }