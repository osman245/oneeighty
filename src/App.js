import 'tachyons';
import './App.css';
import React,{Component} from 'react';
import SignatureCanvas from 'react-signature-canvas';






class App extends Component {//component to use render(

constructor() {
super();
this.state = { 
   redirect:false;
}
}







    sigPad = {};
    clear = () => {
    this.sigPad.clear();
  }

reDirect() {
 this.setState({redirect:true});




}

}

render() {
   



  return(
    <div>
    { this.state.redirect === false
          ? <div>
              <Street />
            </div>
          : (
            <p> thanks for submitting the survey :)</p> 
            )
        }
      </div>
);

    

  
}
}
export default  App;


  








  /*


   <div className="mt4">
        <label className=" db " htmlFor="name">Name:</label>
        <input onChange = {this.onNameChange} className=" mv2 pa2 input-reset ba b--black hover-bg-black hover-white" type="name" name="name"  id="email-address"/>
      </div>

      <div className="mv3">
        <label className="db " htmlFor="email-address">Email Address:</label>
        <input onChange = {this.onEmailChange} className=" mv2 b pa2 input-reset ba b--black  hover-bg-black hover-white " type="email" name="email-address"  />
      </div>
      */