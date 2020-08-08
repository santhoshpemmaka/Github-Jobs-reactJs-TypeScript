export const MAKE_REQUEST = "MAKE_REQUEST";
export const GET_DATA = "GET_DATA";
export const ERROR = "ERROR";
export const UPDATE_NEXT_PAGE = "UPDATE_NEXT_PAGE";

export interface Make_Request {
  type: typeof MAKE_REQUEST;
}

export interface Get_Data {
  type: typeof GET_DATA;
  jobs: any;
}

export interface Error {
  type: typeof ERROR;
  error: any;
}

export interface Update_Nextpage {
  type: typeof UPDATE_NEXT_PAGE;
  hasNextPage: any;
}

export type GithubActionTypes =
  | Make_Request
  | Get_Data
  | Error
  | Update_Nextpage;
