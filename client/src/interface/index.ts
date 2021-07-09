import { ChangeEvent } from "react";

export interface HTMLInputEvent extends ChangeEvent {
  target: HTMLInputElement & EventTarget;
}

export interface PostData {
  phoneNumber?: string;
  otp?: string;
}

export interface PostRequestProps {
  data: PostData;
  path: string;
}

export interface PostResponseProps {
  otp?: string;
  phoneNumber?: string;
  valid: boolean;
}
