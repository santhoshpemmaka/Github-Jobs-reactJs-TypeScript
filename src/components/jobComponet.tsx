import React, { useState } from "react";
import { Container } from "react-bootstrap";
import UseFetchjobs from "./fetchJobs";
import { connect } from "react-redux";
import Job from "./jobs";
import JobPagination from "./jobPagination";
import SearchForm from "./jobSearch";

function JobComponent(props) {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { hasNextPage, loading, error, jobs } = props.GithubReducer;

  const handleParamChange = e => {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams(prevParams => {
      return { ...prevParams, [param]: value };
    });
  };

  return (
    <Container className="my-4">
      <h1 className="mb-4">Github Jobs</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      <UseFetchjobs params={params} page={page} />
      {loading && <h1>Loading</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      {jobs &&
        jobs.map(job => {
          return <Job key={job} job={job} />;
        })}
      <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
}
const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(JobComponent);
