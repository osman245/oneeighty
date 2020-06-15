import 'tachyons';
import './App.css';
import React,{Component} from 'react';
import SignatureCanvas from 'react-signature-canvas';






class App extends Component {//component to use render(

constructor() {
super();
this.state = { 
   formSignature:{},
   decision:'',
   redirect:false
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
  


submitFormIn = () => {
  this.setState({redirect:true});
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
    
       


}

render() {
   



  return(

    <div>


    <html>
<head>
<title>The Toronto raptors</title>
<link   href ="TorontoRaptorsStyle.css" rel = "stylesheet" text = "text/css">
<link href="https://fonts.googleapis.com/css?family=Ma+Shan+Zheng&display=swap" rel="stylesheet">
<head/>
<html/>

<h1 className="title pointer">180 Change Street Survey</h1>

          {this.state.redirect === false
           ? 
       <div>
  <form className="center styl ml5">
     <h2> Question: The transit system in toronto is good </h2>
     <div className="flex items-center mb2 ">
      <input className="mr2" type="radio" 
       name="radio"  id='yes' onClick={this.formChange} />
      <label htmlFor="Yes" className="lh-copy"  >Yes</label>
    </div>

    <div className="flex items-center mb2">
      <input className="mr2" type="radio"  name="radio" id='no' onClick={this.formChange}/>
      <label htmlFor="airbud" className="lh-copy">No</label>
    </div>

    <div className="flex items-center">
      <input className="mr2" type="radio" name="radio" id='maybe' onClick={this.formChange}/>
      <label htmlFor="hocuspocus" className="lh-copy">Maybe</label>
  <br/>
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
    <br/>
      <input onClick = {this.submitFormIn}  className="b ph3 pv2 input-reset ba b--black  grow pointer f6 dib" type="button" value="Submit"/>
    </div>
</form>


  


 


           </div>

           :(
            <div className="center mt4">
            <div>Thank you for submitting </div>
            <img alt="Turning stumbling blocks to stepping stones"  src="data:image/jpeg;base64,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"/>
             </div>
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