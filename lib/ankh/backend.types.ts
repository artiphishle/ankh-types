import { IAnkhFormField, TAnkhFormUserAttribute } from "./form.types";

/*** @enum EAnkhBackendType */
export enum EAnkhBackendType {
  Supabase = "supabase",
}

/*** @enum EAnkhBackendAuthLoginWith */
export enum EAnkhBackendAuthLoginWith {
  Email = "email",
  Username = "username",
  Phone = "phone",
}

/*** @interface IAnkhBackend */
export interface IAnkhBackend {
  readonly type: EAnkhBackendType;
  readonly auth: {
    readonly loginWith: EAnkhBackendAuthLoginWith[];
    readonly userAttributes: TAnkhFormUserAttribute;
  };
}
