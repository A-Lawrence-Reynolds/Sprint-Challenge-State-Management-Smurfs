import React, { useEffect } from "react";
import { fetchSmurfs } from "../actions/index";
import { connect } from "react-redux";

const DisplaySmurfs = props => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  console.log(props);

  return (
    <div>
      {props.smurfs.map(data => (
        <div key={Date.now()}>
          <h1>{data.name}</h1>
          <h2>{data.age}</h2>
          <h3>{data.height}</h3>
        </div>
      ))}
    </div>
  );
};

export default connect(
  state => ({ smurfs: state.smurfs }),
  dispatch => ({ fetchSmurfs: () => fetchSmurfs(dispatch) })
)(DisplaySmurfs);
