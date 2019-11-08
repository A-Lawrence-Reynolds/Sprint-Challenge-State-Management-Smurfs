import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf } from "../actions/index";

function SmurfList(props) {
  const [form, updateForm] = useState({ name: "", age: "", height: "" });
  const handleChanges = e => {
    updateForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {props.error && <div>{props.error.message}</div>}
      <form>
        <input
          className="input-data"
          name="name"
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
        <button
          onClick={e => {
            e.preventDefault();
            props.addSmurf(form);
          }}
          type="submit"
        >
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
    addSmurf: smurf => addSmurf(smurf, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmurfList);
