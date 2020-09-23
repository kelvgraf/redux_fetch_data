import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  loading: state.loading,
  payload: state.payload
});

const Output = ({ payload, loading }) => {
  const data = payload;
  const urgot = data && data.data && data.data.Urgot.id;
  return loading ? <p>loading...</p> : <h1>{urgot}</h1>
  };

export default connect(mapStateToProps)(Output);
