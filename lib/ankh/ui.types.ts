/*** @enum EAnkhUi */
export enum EAnkhUi {
  Button = "button",
  Card = "card",
  CardArticle = "cardArticle",
  Carousel = "carousel",
  Flex = "flex",
  Form = "form",
  Grid = "grid",
  Image = "image",
  List = "list",
  Maps = "maps",
  Text = "text",
}
/*** @enum EAnkhUiScreen */
export enum EAnkhUiScreen {
  AuthSignIn = "AuthSignIn",
  AuthSignUp = "AuthSignUp",
  Chat = "Chat",
  Profile = "Profile",
  Settings = "Settings",
  Shop = "Shop",
}

/*** @interface IAnkhUi */
export interface IAnkhUi {
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
}
