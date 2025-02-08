import { TUniqueIdentifier } from "./basic.types";

/*** @enum EAnkhUi */
export enum EAnkhUi {
  Button = "button",
  Card = "card",
  CardArticle = "cardArticle",
  Carousel = "carousel",
  Cart = "cart",
  Flex = "flex",
  Form = "form",
  Grid = "grid",
  Image = "image",
  List = "list",
  Maps = "maps",
  Text = "text",
  Upload = "upload",
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

/*** @interface IAnkhUi */
export interface IAnkhUi {
  readonly id: TUniqueIdentifier;
  readonly ui: EAnkhUi;
  readonly props?: any;
  readonly uis?: IAnkhUi[];
}

/*** @interface IAnkhUiCardArticle */
export interface IAnkhUiCardArticle {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly photo: string;
  readonly price: number;
}
