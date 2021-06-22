import React,{Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
class Profile extends Component{


  state ={
    id:localStorage.getItem("id"),
    name: localStorage.getItem("user"),
    image: localStorage.getItem("url"),
    currentBalance: localStorage.getItem("currentBalance"),
    totalGain: localStorage.getItem("totalGain"),
}
     //when click redirect to login page after setting the localStorage to null
    logOut= async e =>  {
        console.log("tester")
        localStorage.setItem("user", "")
        localStorage.setItem("currentBalance", "")
        localStorage.setItem("totalGain", "")
        window.location.reload(false);
    };

    //add the money into the currentBalance and minus that from totalGain
    addMoney= async e =>  {

    };

    render(){
        return(
          <div>
            <h1 className="center">{this.state.name}</h1>
            <div className="container">
                <div className="box-1">
                <button> Edit </button>
                </div>
                <div className="box-1">
                <button onClick={this.logOut}> Log Out</button>
                </div>
                </div>
            <div className="container">
                <div className="box-1">
                <img src={this.state.image}  width="400" height="400"/>
                </div>
                <div className="box-2">
                <p>Current Balance:  {this.state.currentBalance}</p>  
                <p>Total gain:  {this.state.totalGain}</p> 
                <label className="center" for="number">Amount adding:</label> 
                <input className="center" id="number" type="number" name="number"/>
                <button className="center" onClick={this.addMoney}> Add</button>    
                </div>
                </div>
                
                <h1 className="center"> Add money</h1>
                <label className="center" for="number">Password:</label> 
                <input className="center" id="number" type="number" name="number"/>
                <button className="center"> Add</button>
           
            

          </div>
        )
      }
}

export default Profile;
