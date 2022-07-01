import { Field } from "redux-form";
import React from "react";

class StreamCreate extends React.Component {
  nameInput = ({ input }) => {
    return <input {...input} type="text" />;
  };

  onSubmit = (e) => {
    console.log(this.props);
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <label>Name:</label>
        <Field name="name" component={this.nameInput} />
        <label>About:</label>
        <Field name="about" component={this.nameInput} />
        <button className="ui button green">Submit</button>
      </form>
    );
  }
}

export default StreamCreate;
