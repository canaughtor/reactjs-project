export interface Protocol {
  id: string;
  diagnosis: string;
  name: string;
}

export interface Clinic {
  country_id: string;
  id: string;
  name: string;
}
[];

export interface Country {
  id: string;
  name: string;
  code: string;
  status: boolean;
  dial_code: string;
  clinics: {
    country_id: string;
    id: string;
    name: string;
  }[];
}
[];

export interface State {
  loading: boolean;
  data: { protocol: Protocol[]; country: Country[] };
  error: string;
}
