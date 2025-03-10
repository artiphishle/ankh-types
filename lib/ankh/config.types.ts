import { IAnkhBackend } from "./backend.types";
import type { IAnkhPage } from "./page.types";
import type { IAnkhTheme } from "./theme.types";

/*** @enum EAnkhNavType */
export enum EAnkhNavType {
  Drawer = "drawer",
  Tabs = "tabs",
}

/*** @interface IAnkhConfig */
export interface IAnkhConfig {
  readonly nav: { type: EAnkhNavType };
  readonly themes: IAnkhTheme[];
  readonly backend: IAnkhBackend;
  readonly pages: IAnkhPage[];
}
