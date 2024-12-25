/*** @enum EAnkhUi */
export enum EAnkhUi {
  Text = "text",
}
/*** @enum EAnkhUiScreen */
export enum EAnkhUiScreen {
  AuthSignIn = "AuthSignIn",
  AuthSignUp = "AuthSignUp",
  Profile = "Profile",
}

/*** @interface IAnkhUi */
export interface IAnkhUi {
  readonly ui: EAnkhUi;
  readonly props?: any;
  readonly uis?: IAnkhUi[];
}
