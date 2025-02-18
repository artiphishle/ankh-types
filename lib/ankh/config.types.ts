import type { IAnkhAuth } from "./auth.types";
import { TPublicUrl, TUniqueIdentifier } from "./basic.types";
import type { IAnkhPage } from "./page.types";
import type { IAnkhTheme } from "./theme.types";

/*** @enum EAnkhNavType */
export enum EAnkhNavType {
  Drawer = "drawer",
  Tabs = "tabs",
}

/*** @interface IAnkhConfig */
export interface IAnkhConfig {
  readonly freight: Record<TUniqueIdentifier, TPublicUrl>;
  readonly nav: { type: EAnkhNavType };
  readonly themes: IAnkhTheme[];
  readonly auth: IAnkhAuth;
  readonly pages: IAnkhPage[];
}
