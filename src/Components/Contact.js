import React, { Component } from 'react'
import EmptyForm from './EmptyForm'
import { runInThisContext } from 'vm'

export class Contact extends Component {
    constructor(props){
        super(props)
        console.log('constructor')
        this.state={
            datas:[ ]
        }
    }
    componentDidMount(){
        console.log('componentDidMount')
        //jQuery 控制網頁上的標籤
        //ajax
       this.getDatas();
    }
    getDatas(){
        fetch('http://localhost:3001/contact/')
        .then(res=>res.json())
        .then(datas=>this.setState({
            datas:datas
        }))
    }
    //data 是子元件傳過來資料
    addHandler = data => {
       //console.log(data);
       fetch('http://localhost:3001/contact/',{
           method:'POST',
           body:JSON.stringify(data),
           headers:new Headers({
               'Content-Type':'application/json'
           })
        })
        .then(res=>res.json())
        .then(data=> {
         alert("新增成功");
         this.getDatas();
        })         
        
    }
    render() {
        console.log('render')
        console.log(this.state.datas)
        return (
            <>
            <div>
                Contact Page
            </div>
            <div className="row">
                <div className="col-9">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <td>id</td>
                                <td>name</td>
                                <td>topic</td>
                                <td>message</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.datas.map(data => 
                                <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.topic}</td>
                                <td>{data.message}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="col-3"> <EmptyForm parentClick={this.addHandler}></EmptyForm></div>
            </div>
           
            </>
        )
    }
}

export default Contact
