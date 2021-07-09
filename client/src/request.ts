import axios from "axios";
import { api } from "./app.utils";
import { PostRequestProps, PostResponseProps } from "./interface";

export const postRequestAxios = async (
  props: PostRequestProps
): Promise<PostResponseProps> => {
  const { data, path } = props;
  return axios.post(`${api}/${path}`, data, {}).then((res) => res.data);
};

export const post = async (
  props: PostRequestProps
): Promise<PostResponseProps> => {
  return postRequestAxios(props);
};
