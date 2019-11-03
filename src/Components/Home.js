import React, { Component } from 'react'
import HelloReact from './HelloReact';
import Hello from './Hello';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.name = "eric"
        this.today = new Date();    
        this.handlerClick1 = this.handlerClick1.bind(this);
        this.state = {
             myDate:new Date(),
             name:"eric",
             isLogin:false,
             skills:["HTML5","CSS3","JavaScript","jQuery"]
        }
    }
   
    handlerClick1(event){
        console.log('click1');
        console.log(event);
        console.log(event.target);
        console.log(this);   //undefined
        console.log(this.name)
    }
    handlerClick2(event){
        console.log('click2');
        console.log(event);
        console.log(event.target);
        console.log(this);   //undefined
        console.log(this.name)
    }
    handlerClick3 = event => {
        console.log('click3');
        console.log(event);
        console.log(event.target);
        console.log(this);   //undefined
        console.log(this.name)       
    }
    handlerClick4=()=>{
        this.today = new Date();
        console.log(this.today.toLocaleTimeString())
        this.setState({
            myDate:new Date()
        })
    }
    handlerClick5 = () => {
        this.setState({
            isLogin:!this.state.isLogin
        })
    }
    handlerClick6 = () => {
        // this.skills.push('React');
        // console.log(this.skills)
        this.setState({
            skills:[...this.state.skills,"React"]
        })
     
    }
    handlerClick7 = (data) =>{
        //data 是子元件傳過來的資料
        alert(data)
    }
    render() {
        const element = <h3>Home Page</h3>
        const aUser = {name:'Jack',age:31}
        function formatData(user){
           return `Hello ${user.name}, You are ${user.age} years old.`
        }
    
        return (
            <>
            <div>
                {element} element
            </div>
            <p>{aUser.name + "," + aUser.age}</p>
            <p>{formatData(aUser)}</p>
            <h1>{1+1}</h1>
            <hr />
            <label htmlFor="name">Name：</label>
            <input type="text" id="name" className="s1" />
            <hr />
            <button onClick={this.handlerClick1} className="btn btn-primary">Click1</button>
            <button onClick={this.handlerClick2.bind(this)} className="btn btn-secondary">Click2</button>
            <button onClick={this.handlerClick3} className="btn btn-success">Click3</button>
            <hr />
            <p style={{color:'green',backgroundColor:'lightgreen',fontSize:'24px',padding:'10px'}}>樣式的處理</p>
           <hr />

           <HelloReact  />
           <HelloReact name="Tom" age="20" />
           <HelloReact name="Jack" age="30" />
           <hr/>

           <p>成員變數：{this.today.toLocaleTimeString()}</p>
           <p>state：{this.state.myDate.toLocaleTimeString()}</p>
           <button onClick={this.handlerClick4}>setState</button>
           <hr />
           
           {this.state.isLogin ? <button onClick={this.handlerClick5}>登出</button> : <button onClick={this.handlerClick5}>登入</button>}
           {this.today.getHours() > 12 && <h2>午安</h2>}
           <hr />
           <button onClick={this.handlerClick6}>add new skill</button>
           <ul>
               <li>{this.state.skills[0]}</li>
               <li>{this.state.skills[1]}</li>
               <li>{this.state.skills[2]}</li>
               <li>{this.state.skills[3]}</li>
           </ul>
           <ul>
               {
                   this.state.skills.map(function(skill,idx){
                        return <li key={idx}>{skill}</li>
                   })
               }
           </ul>
           <ul>
               {
                   this.state.skills.map((skill,idx) => <li key={idx}>{skill}</li>)
               }
           </ul>
           <hr />
           <h1>父元件</h1>
           <Hello name="Sherman" age={20} parentClick={this.handlerClick7}></Hello>

            </>
        )
    }
}

export default Home
