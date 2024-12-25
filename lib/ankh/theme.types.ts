/*** @interface IAnkhFonts */
export interface IAnkhFonts {
  readonly custom?: Record<string, string>;
  readonly google?: string[];
}
/*** @interface IAnkhTheme */
export interface IAnkhTheme {
  readonly name: string;
  readonly fonts?: IAnkhFonts;
  readonly active?: boolean;
  readonly logo?: string;
}
