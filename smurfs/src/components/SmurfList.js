import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchSmurf } from "../actions/index";

function SmurfList(props, dispatch) {
  const [form, updateForm] = useState({ smurf: "", age: "", height: "" });
  const handleChanges = e => {
    updateForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const submitSmurf = e => {
    e.preventDefault();
    dispatch({ type: "POST_SMURF", payload: form });
  };

  return (
    <>
      {props.error && <div>{props.error.message}</div>}
      <form>
        <input
          className="input-data"
          name="smurf"
          placeholder="Name"
          value={form.smurf}
          onChange={handleChanges}
        ></input>
        <input
          className="input-data"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChanges}
        ></input>
        <input
          className="input-data"
          name="height"
          placeholder="Height"
          value={form.height}
          onChange={handleChanges}
        ></input>
        <button onClick={submitSmurf} type="submit">
          {" "}
          Add To Town
        </button>
      </form>
    </>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSmurf: () => fetchSmurf(dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmurfList);
