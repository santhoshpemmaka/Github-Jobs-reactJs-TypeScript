import {
  GithubActionTypes,
  MAKE_REQUEST,
  GET_DATA,
  ERROR,
  UPDATE_NEXT_PAGE
} from "../container/githubJobsContanier";

let InitialState = {
  loading: true,
  jobs: [],
  hasNextpage: null
};

const GithubReducer = (state = InitialState, action: GithubActionTypes) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state
      };
    case GET_DATA:
      return {
        ...state,
        loading: false,
        jobs: action.jobs
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case UPDATE_NEXT_PAGE:
      return {
        ...state,
        hasNextpage: action.hasNextPage
      };
    default:
      return state;
  }
};

export default GithubReducer;
