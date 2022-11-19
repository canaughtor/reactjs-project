
export interface State {
  loading: boolean;
  data: Diagnosis;
  error: string;
}

export interface Diagnosis {
  data : {
  id: string,
  name: string,
  diagnosisId: string,
  diagnosis: string,
  clinic: string,
  country: string,
  version: string,
  effectiveDate: string,
  }[];
};
