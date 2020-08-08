import { useEffect } from "react";
import axois from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  githubMakerequest,
  getData,
  ErrorPage,
  updateNextPage
} from "../action/githubAction";
import { FetchjobsProps } from "../interface/fetchinterface";

const Base_Url =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

function UseFetchjobs(props): any {
  const { page, params } = props;
  useEffect(() => {
    const cancelToken = axois.CancelToken.source();
    props.githubMakerequest();
    axois
      .get(Base_Url, {
        cancelToken: cancelToken.token,
        params: { markdown: true, page: page, ...params }
      })
      .then(res => {
        props.getData(res.data);
      })
      .catch(e => {
        if (axois.isCancel(e)) return;
        props.ErrorPage(e);
      });
    const cancelToken1 = axois.CancelToken.source();
    props.githubMakerequest();
    axois
      .get(Base_Url, {
        cancelToken: cancelToken.token,
        params: { markdown: true, page: page, ...params }
      })
      .then(res => {
        props.updateNextPage(res.data.length !== 0);
      })
      .catch(e => {
        if (axois.isCancel(e)) return;
        props.ErrorPage(e);
      });

    return () => {
      cancelToken.cancel();
      cancelToken1.cancel();
    };
  }, [params, page]);

  return "";
}

const mapDistachToProps = dispatch => {
  return {
    githubMakerequest: bindActionCreators(githubMakerequest, dispatch),
    getData: bindActionCreators(getData, dispatch),
    ErrorPage: bindActionCreators(ErrorPage, dispatch),
    updateNextPage: bindActionCreators(updateNextPage, dispatch)
  };
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  mapDistachToProps
)(UseFetchjobs);
