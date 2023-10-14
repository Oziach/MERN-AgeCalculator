
import { Component } from "react";

class AgeCalc extends Component{

    constructor(){
        super();
        this.state={
            birthDate: '',
            age: '?'
        }
    }

    handleDateChange = (event) => {
        this.setState({birthDate: event.target.value})
    }

    calculateAge = ()=>{
        const currentDate = new Date();
        const birthDate = new Date(this.state.birthDate);

        const ageInMs = currentDate-birthDate;
        const ageInYears = Math.floor(ageInMs/(1000*60*60*24*365));

        this.setState({age: ageInYears})
    }

    render(){
        return(
            <div className="container pt-4 text-center w-25">
                <h1 className="fw-bold">Age Calculator</h1> 
                <h5 className="fw-bold mt-4">Enter your date of birth</h5>

                <input className="form-control border border-dark" type="date" onChange={this.handleDateChange} />

                <button 
                className="btn btn-primary text-white p-2 my-3"
                 style={{fontSize: "0.8em"}}
                 onClick={this.calculateAge}>
                 Calculate Age
                </button>

                <h3 className="fw-bold">You are {this.state.age} years old</h3>

            </div>
        )
    }
}

export default AgeCalc