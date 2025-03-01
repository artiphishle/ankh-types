import { TUniqueIdentifier } from "./basic.types";

/*** @enum EAnkhUiCharts */
export enum EAnkhUiCharts {}
/*** @enum EAnkhUi */
export enum EAnkhUi {
  Button = "button",
  Camera = "camera",
  Card = "card",
  CardArticle = "cardArticle",
  Carousel = "carousel",
  Cart = "cart",
  DarkModeSwitcher = "darkModeSwitcher",
  Flex = "flex",
  Form = "form",
  Grid = "grid",
  Image = "image",
  LanguageSwitcher = "languageSwitcher",
  List = "list",
  Maps = "maps",
  Media = "media",
  NavSwitcher = "navSwitcher",
  PushNotificationButton = "pushNotificationButton",
  Text = "text",
  ThemeSwitcher = "themeSwitcher",
  Upload = "upload",
  //
  LineChart = "lineChart",
  BarChart = "barChart",
  PieChart = "pieChart",
}
/*** @enum EAnkhUiPlugin */
export enum EAnkhUiPlugin {
  AuthSignIn = "AuthSignIn",
  AuthSignUp = "AuthSignUp",
  Chat = "Chat",
  Profile = "Profile",
  Settings = "Settings",
  Shop = "Shop",
}
/*** @enum EAnkhUiVariant */
export enum EAnkhUiVariant {
  Primary = "primary",
  Secondary = "secondary",
}

export interface IAnkhUi {
  readonly id: TUniqueIdentifier;
  readonly ui: EAnkhUi;
  readonly props?: any;
  readonly uis?: IAnkhUi[];
}
export interface IAnkhUiCardArticle {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly photo: string;
  readonly price: number;
}
