import 'tachyons';
import './App.css';
import React,{Component} from 'react';
import SignatureCanvas from 'react-signature-canvas';






class App extends Component {//component to use render(

constructor() {
super();
this.state = { 
   formSignature:{},
   decision:''
}


}







    sigPad = {};
    clear = () => {
    this.sigPad.clear();
  }

formChange = (event) => {

    this.setState({decision: event.currentTarget.id});
       console.log(this.state.decision);

  }
  /* if(document.getElementById('yes').checked) {
this.setState({decision: event.target.id});
console.log("yes");
} else if(document.getElementById('no').checked){
//this.setState({decision: 'no'});
console.log("no");
}else if(document.getElementById('maybe').checked) {
//this.setState({decision: 'maybe'});
console.log("maybe");
}else {

}
*/


submitFormIn = () => {

   fetch('https://hidden-depths-63079.herokuapp.com/form', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          decision: this.state.decision
        })
      })
      .then(response => response.json())
      .then(data =>  {console.log(data) })
      .catch(err =>  { console.log("it doesnt work") } )
      
      //http://localhost:3000/form


}

render() {
   



  return(

    <div>

    
    <h1 className="title pointer">180 Change Street Form</h1>
    

  <form className="center styl">
     <h2> Question: The transit system in toronto is good </h2>





    
     <div className="flex items-center mb2">
      <input className="mr2" type="radio" 
       name="radio"  id='yes' onClick={this.formChange} />
      <label htmlFor="Yes" className="lh-copy"  >Yes</label>
    </div>

    <div className="flex items-center mb2">
      <input className="mr2" type="radio"  name="radio" id='no' onClick={this.formChange}/>
      <label htmlFor="airbud" className="lh-copy">No</label>
    </div>

    <div className="flex items-center mb2">
      <input className="mr2" type="radio" name="radio" id='maybe' onClick={this.formChange}/>
      <label htmlFor="hocuspocus" className="lh-copy">Maybe</label>
    </div>






     <div className="mt5">
        <label className=" db mb2" htmlFor="name">Signature:</label>
        <SignatureCanvas penColor='black' 
    canvasProps={{ width: 300, height: 125, className:  'sigCanvas ba b--black'}}
       ref={(ref) => { this.sigPad = ref }}
     />
     <input onClick={this.clear} type="button" className="button" value="clear" width="10"  height="10"/>
      </div>

 




      

    <div className="">
      <input onClick = {this.submitFormIn}  className="b ph3 pv2 input-reset ba b--black  grow pointer f6 dib" type="button" value="Submit"/>
    </div>
   
</form>


  


 



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