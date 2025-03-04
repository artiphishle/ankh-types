import { EAnkhUiPlugin, type IAnkhUi } from "./ui.types";

export enum EAnkhUiRole {
  Admin = "admin",
  User = "user",
}

/*** @interface IAnkhPage */
export interface IAnkhPage {
  readonly id: string;
  readonly name: string;
  readonly path: string;
  readonly title: string;
  readonly icon?: string;
  readonly plugin?: EAnkhUiPlugin;
  readonly roles?: Array<EAnkhUiRole | null>;
  readonly uis?: IAnkhUi[];
}
