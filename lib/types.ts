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

/**
 * Ankh Color
 */
export enum EAnkhColorUnit {
  Hex,
  Hsl,
  Lab,
  Rgb,
}
export enum EAnkhColorParserError {
  InvalidFormat = 'Invalid format',
  InvalidHexFormat = 'Invalid HEX format',
  InvalidHslFormat = 'Invalid HSL format',
  InvalidLabFormat = 'Invalid LAB format',
  InvalidRgbFormat = 'Invalid RGB format',
}

export interface IAnkhColor {
  readonly value: string;
  readonly parsedValue: string | number[];
  readonly unit: EAnkhColorUnit;
}
export interface IAnkhColorTone {
  saturation: { min: number, max: number },
  brightness: { min: number, max: number }
}
export interface IAnkhUiColorHueItem {
  readonly value: string;
  readonly className?: string;
}
export interface IAnkhUiColorHue {
  readonly color: string;
}

/**
 * Ankh Error
 */
export enum EAnkhErrorSeverity {
  Fatal,
}

export interface IAnkhUseErrorOptions {
  message: string;
  severity?: EAnkhErrorSeverity;
}