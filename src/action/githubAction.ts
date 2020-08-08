import {
  GithubActionTypes,
  MAKE_REQUEST,
  GET_DATA,
  ERROR,
  UPDATE_NEXT_PAGE
} from "../container/githubJobsContanier";

export const githubMakerequest = (): GithubActionTypes => {
  return {
    type: MAKE_REQUEST
  };
};

export const getData = (jobs): GithubActionTypes => {
  return {
    type: GET_DATA,
    jobs: jobs
  };
};

export const ErrorPage = (err): GithubActionTypes => {
  return {
    type: ERROR,
    error: err
  };
};

export const updateNextPage = (nextpage): GithubActionTypes => {
  return {
    type: UPDATE_NEXT_PAGE,
    hasNextPage: nextpage
  };
};
