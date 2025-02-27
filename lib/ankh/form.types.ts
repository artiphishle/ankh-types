import { HTMLInputTypeAttribute } from "react";
import { TUniqueIdentifier } from "./basic.types";

/*** @type TAnkhFormFieldType */
export type TAnkhFormFieldType = HTMLInputTypeAttribute;

/*** @interface IAnkhFormField */
export interface IAnkhFormField {
  readonly id: TUniqueIdentifier;
  readonly defaultValue?: string;
  readonly label?: string;
  readonly maxLength?: number;
  readonly minLength?: number;
  readonly placeholder?: string;
  readonly type?: TAnkhFormFieldType;
  readonly required?: boolean;
  readonly pattern?: RegExp; // Optional regex validation
}
