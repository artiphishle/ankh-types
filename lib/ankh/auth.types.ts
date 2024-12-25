import type { AmplifyAuthProps } from "@aws-amplify/backend-auth";

/*** @enum EAnkhAuthMode */
export enum EAnkhAuthMode {
  Entire = "ENTIRE",
  InApp = "IN_APP",
}

/*** @interface IAnkhAuth */
export interface IAnkhAuth {
  readonly mode: EAnkhAuthMode;
  readonly cognito: TAmplifyAuthProps;
}

/*** @type AmplifyAuthProps */
export type TAmplifyAuthProps = AmplifyAuthProps;
