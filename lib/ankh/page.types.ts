import { type IAnkhUi } from "./ui.types";

export enum EAnkhUiRole {
  Admin = "admin",
  User = "user",
}

export interface IAnkhPage {
  readonly id: string;
  readonly name: string;
  readonly path: string;
  readonly title: string;
  readonly icon?: string;
  readonly roles?: Array<EAnkhUiRole | null>;
  readonly uis?: IAnkhUi[];
}
