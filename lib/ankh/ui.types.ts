import { TUniqueIdentifier } from "./basic.types";
import { EAnkhUiRole } from "./page.types";

export enum EAnkhUi {
  Button = "button",
  Camera = "camera",
  Card = "card",
  CardArticle = "cardArticle",
  Carousel = "carousel",
  Cart = "cart",
  Chessboard = "chessboard",
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
  Table = "table",
  Text = "text",
  ThemeSwitcher = "themeSwitcher",
  Upload = "upload",
  //
  LineChart = "lineChart",
  BarChart = "barChart",
  PieChart = "pieChart",
}
export enum EAnkhUiVariant {
  Primary = "primary",
  Secondary = "secondary",
}

export interface IAnkhUi {
  readonly id: TUniqueIdentifier;
  readonly ui: EAnkhUi;
  readonly props?: any;
  readonly roles?: EAnkhUiRole[];
  readonly uis?: IAnkhUi[];
}
export interface IAnkhUiCardArticle {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly photo: string;
  readonly price: number;
}
