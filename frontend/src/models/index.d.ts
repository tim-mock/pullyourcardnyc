import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class dataTableNew {
  readonly id: string;
  readonly License_SL_No?: number;
  readonly License_Type?: string;
  readonly License_Number?: number;
  readonly Last_Name?: string;
  readonly First_Name?: string;
  readonly Business_Name?: string;
  readonly Number?: string;
  readonly Street?: string;
  readonly License_Business_City?: string;
  readonly Business_State?: string;
  readonly Business_Email?: string;
  readonly Business_Phone_Number?: string;
  readonly Postcode?: string;
  readonly License_Status?: string;
  readonly Latitude?: number;
  readonly Longitude?: number;
  readonly Community?: number;
  readonly Council_District?: number;
  readonly Census_Tract?: number;
  readonly BIN?: number;
  readonly BBL?: number;
  readonly NTA?: string;
  constructor(init: ModelInit<dataTableNew>);
  static copyOf(source: dataTableNew, mutator: (draft: MutableModel<dataTableNew>) => MutableModel<dataTableNew> | void): dataTableNew;
}