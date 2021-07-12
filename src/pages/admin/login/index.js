import React from 'react'

 export default class AdminLoginPage extends React.Component{
    state={
        form:{
            email:"",
            password:""
        }
    }
     constructor(props){
         super(props);
         //this here will refer to function instead of class in react class component
         //2nd way => fat arrow function
         //3rd way -> pass fat arrow fuction as onChange ={() =>{}}
         //this.onChangeHandler=this.onChangeHandler.bind(this);
     }
    onChangeHandler (event)  {
//  console.log(event.target.value,event.target.name);
const newstate={...this.state}
newstate.form[event.target.name]=event.target.value
//console.log(newstate)
//this below causes the state change to trigger
this.setState(newstate);
    }

    onSubmitHandler(event){
        event.preventDefault();
        //console.log('onSubmit')
        alert(JSON.stringify(this.state))
    }
    render(){
        console.log('hello');
        return <form onSubmit={(e) =>{
        
        //alert('submitted')}}> 
        //alert(JSON.stringify(this.state.form))
        this.onSubmitHandler(e)
        }}>
        <p>
            <label>Email</label>
            <input type="text" value={this.state.form.email} onChange={(event) => {this.onChangeHandler(event)}} name="email" placeholder="Enter your Email" />
        </p>
        <p>
            <label>Password</label>
            <input type="password" value={this.state.form.password  } onChange={(event) => {this.onChangeHandler(event)}} name="password" placeholder="Enter your Password" />
        </p>
        
        <p>
            
            <button type="submit">Login</button>
        </p>
    </form>
    }
}

