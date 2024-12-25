/*** @enum EAnkhFormFieldType */
export enum EAnkhFormFieldType {
  Checkbox = "checkbox",
  Date = "date",
  Email = "email",
  Number = "number",
  Password = "password",
  Phone = "phone",
  Radio = "radio",
  Text = "text",
  Textarea = "textarea",
}

/*** @interface IAnkhFormField */
export interface IAnkhFormField {
  readonly id: string;
  readonly label?: string;
  readonly maxLen?: number;
  readonly minLen?: number;
  readonly placeholder?: string;
  readonly type?: EAnkhFormFieldType;
}
