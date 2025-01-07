import { EAnkhUiPlugin, type IAnkhUi } from "./ui.types";

/*** @interface IAnkhPage */
export interface IAnkhPage {
  readonly id: string;
  readonly name: string;
  readonly path: string;
  readonly title: string;
  readonly icon?: string;
  readonly plugin?: EAnkhUiPlugin;
  readonly uis?: IAnkhUi[];
}
