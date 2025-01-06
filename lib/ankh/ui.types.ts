/*** @enum EAnkhUi */
export enum EAnkhUi {
  Button = "button",
  Card = "card",
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
}

/*** @interface IAnkhUi */
export interface IAnkhUi {
  readonly ui: EAnkhUi;
  readonly props?: any;
  readonly uis?: IAnkhUi[];
}
