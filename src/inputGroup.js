import React, { Component } from 'react';


export default class InputGroupForm extends Component {
  state = {text:""}
  submitMessage = (event) => {
    event.preventDefault();
    this.props.addMessage({username: this.props.user.username, text : this.state.text});
    this.setState((currentState) => ({ text: ""}));

  }

 loadText = event => {
   const value = event.target.value;
   this.setState((currentState) => ({ text: value}));
 }
 /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return this.state.text === "" ;
  };

  render(){
    return (
	<form className="input-group" onSubmit={this.submitMessage} >
		<input type="text" className="form-control" value={this.state.text} placeholder="Enter your message..." onChange={this.loadText} />
		<div className="input-group-append">
			<button className="btn submit-button" disabled={this.isDisabled()}>
				SEND
			</button>
		</div>
	 </form>
)}
}