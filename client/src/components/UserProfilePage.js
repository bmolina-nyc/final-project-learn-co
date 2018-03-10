import React from 'react';

//stateless component 
class UserProfilePage extends React.Component{
  
  state = {
    name: '',
    age: '',
    gender: '',
    validProfile: false
  }

  handleonSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const age = parseInt(event.target.elements.age.value, 10);
    const gender = event.target.elements.gender.value;

    if (this.validAge(age) && this.validName(name) && gender) {
      this.setState({validProfile: true}, ()=>{console.log(this.state)});
     } else {
       this.setState({validProfile: false})
     }
  }
 
  validAge = (age) => {
    return !isNaN(age);
  }

  validName = (name) => {
    return name.length > 1 ? true: false 
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    }, ()=>{console.log(this.state)})
  }
  
  render(){
    return (
      <div> 
      <form id="form" onSubmit={this.handleonSubmit}>
        Name: <input  
              type="text" 
              ref={ref => this.myTextInput = ref}
              value ={this.state.name}
              name="name" 
              onChange={this.handleChange}/> <br/>
        Age: <input 
              type="text" 
              value={this.state.age}
              name="age"
              onChange={this.handleChange}/> <br/>
        gender: <label>Male</label>
            <input type="radio" id="male" value="male" name="gender" onChange={this.handleChange}/>
            <label>Female</label>
            <input type="radio" id="female" value="female" name="gender" onChange={this.handleChange}/> <br/>
            <button type="submit">Submit</button>
      </form>
        
      {this.state.validProfile && <p>Profile Saved!</p>}
      <div> 
      {this.state.validProfile && <p>{this.state.name}</p>}
      {this.state.validProfile && <p>{this.state.age}</p>}
      {this.state.validProfile && <p>{this.state.gender}</p>}
      </div>
    </div>
    )
  }

}
export default UserProfilePage;