import { ChangeEvent } from "react";

export interface HTMLInputEvent extends ChangeEvent {
  target: HTMLInputElement & EventTarget;
}

export interface PostRequestProps {
  data: FormData;
  path: string;
}

export interface PostResponseData {
  code?: string;
}

export interface PostResponseProps {
  data: PostResponseData;
}
