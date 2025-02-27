import { TUniqueIdentifier } from "./basic.types";

/*** @enum EAnkhFormFieldType */
export enum EAnkhFormFieldType {
  Button = "button",
  Checkbox = "checkbox",
  Color = "color",
  Date = "date",
  DatetimeLocal = "datetime-local",
  Email = "email",
  File = "file",
  Hidden = "hidden",
  Image = "image",
  Month = "month",
  Number = "number",
  Password = "password",
  Radio = "radio",
  Range = "range",
  Reset = "reset",
  Search = "search",
  Submit = "submit",
  Tel = "tel",
  Text = "text",
  Time = "time",
  Url = "url",
  Week = "week",
}

/*** @interface IAnkhFormUserAttribute */
export type TAnkhFormUserAttribute = Array<IAnkhFormField["id"]>;

/*** @interface IAnkhFormField */
export interface IAnkhFormField {
  readonly id: TUniqueIdentifier;
  readonly defaultValue?: string;
  readonly label?: string;
  readonly maxLength?: number;
  readonly minLength?: number;
  readonly placeholder?: string;
  readonly type?: EAnkhFormFieldType;
  readonly required?: boolean;
  readonly pattern?: string;
}
