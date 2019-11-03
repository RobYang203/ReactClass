import React, { Component } from "react";


class EmptyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      topic:"topic3",
      message:""
    };
  }
  handlerChange = (event)=>{
    const inputName = event.target.name;
   this.setState({
     [inputName]:event.target.value
   })
  // console.log(event.target.value)
  //  this.setState({
  //    name:event.target.value
  //  })
  //   this.setState({
  //    topic:event.target.value
  //  })
  //    this.setState({
  //    message:event.target.value
  //  })
  }
  submitHandler = (event) => {
    event.preventDefault();
    // console.log(this.state)
    //ajax 將表單輸入的資料送到Server
    //傳給父元件
    this.props.parentClick(this.state);
    //ajax 將表單輸入的資料送到Server
  }
  render() {
    return (
      <>
        <h3>Empty Form1!!</h3>
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="請輸入姓名"   
              value={this.state.name}
              onChange={this.handlerChange}
                      
            />
           <span>{}</span>
          </div>
          <div className="form-group">
            <label htmlFor="topics">Topics</label>
            <select  name="topic" id="topics" onChange={this.handlerChange} value={this.state.topic} className="form-control">
               <option value="topic1">Topic1</option>
               <option value="topic2">Topic2</option>
               <option value="topic3">Topic3</option>
               <option value="topic4">Topic4</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              className="form-control" 
              value={this.state.message}
              onChange={this.handlerChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </>
    );
  }
}
export default EmptyForm;
