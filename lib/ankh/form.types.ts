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
  Textarea = "textarea",
  Time = "time",
  Url = "url",
  Week = "week",
}

/*** @interface IAnkhFormUserAttribute */
export type TAnkhFormUserAttribute = Array<IAnkhFormField["id"]>;

/*** @interface IAnkhFormField */
export interface IAnkhFormField {
  readonly id: TUniqueIdentifier;
  readonly name: string;
  readonly defaultValue?: string;
  readonly label?: string;
  readonly maxLength?: number;
  readonly minLength?: number;
  readonly pattern?: string;
  readonly placeholder?: string;
  readonly required?: boolean;
  readonly type?: EAnkhFormFieldType;
}
