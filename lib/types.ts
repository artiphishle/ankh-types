export type THtmlElement = string;
export type TCssProperty = string;
export type TCssValue = string | number;
export type TStyle = [THtmlElement, TCssProperty, TCssValue];

export type TAnkhUiProps = Record<string, unknown>;
export type TAnkhCmsStatic = Array<{ name: string; files: string[] }>;

/**
 * Ankh Authentication
 */
export interface IAnkhAuthRole {
  UiDelete?: boolean;
  UiRead?: boolean;
  UiWrite?: boolean;
}

/**
 * Ankh CMS
 */
export interface IAnkhCmsConfig {
  pages: IAnkhCmsPage[];
  public?: TAnkhCmsStatic;
  styles?: TStyle[];
}
export interface IAnkhCmsPage {
  name: string;
  uis: IAnkhUi[];
}

/**
 * Ankh UI
 */
export enum EAnkhUi {
  Accordion,
  Button,
  Charts,
  ColorHue,
  ColorPicker,
  Dialog,
  Form,
  Grid,
  Heading,
  Html,
  Icon,
  Image,
  List,
  Nav,
  Pagination,
  PanelGroup,
  Tag
}
export interface IAnkhUi {
  ui: string;
  p: TAnkhUiProps;
  uis?: IAnkhUi[];
}
export enum EAnkhUiVariant {
  Accent = 'accent',
  Default = 'default',
  Error = 'error',
  Info = 'info',
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Warning = 'warning',
}