import type { IAnkhAuth } from "./auth.types";
import type { IAnkhPage } from "./page.types";
import type { IAnkhTheme } from "./theme.types";

/** @interface IAnkhConfig */
export interface IAnkhConfig {
  readonly themes: IAnkhTheme[];
  readonly auth: IAnkhAuth;
  readonly pages: IAnkhPage[];
}
