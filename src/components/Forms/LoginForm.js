import React,{Component} from 'react';
import validator from 'validator';
import InlineError from '../messages/InlineError';
import {Form,Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';




class LoginForm extends Component {
   state = {
       data:{email:"",password:"",firstname:"",lastname:""},
       loading:false,
       errors:{}
   }
   
   onChange = (e) => 
    this.setState({
        data:{...this.state.data,[e.target.name]:e.target.value}
    });
   
   onSubmit = () => {
       const errors = this.validate(this.state.data);
       this.setState({errors});
       if(Object.keys(errors).length === 0){
           this.props.submit(this.state.data);
       }
   };
  
   validate = (data) =>{
       const errors ={};
       if(!validator.isEmail(data.email)) errors.email = "please provide a valid email address";
       if (!data.password || data.password.length < 6) errors.password = "password should have at least 6 characters long";
       if (data.firstname.length < 2) errors.firstname = "First Name should have at least 2 characters long";
       if (data.lastname.length < 2) errors.lastname = "Last Name should have at least 2 characters long";
       
       
       
       return errors;
   }


   render(){
       const {data,errors} = this.state;
        return(
            <Form onSubmit={this.onSubmit}>
            <Form.Field error={!!errors.firstname}>
            <label htmlFor="firstname">firstname</label>
            <input
             type="text" 
             id="firstname" 
             name="firstname" 
             placeholder="your firstname"
             value={data.firstname} 
             onChange={this.onChange} />
             
             </Form.Field>
            {errors.firstname && <InlineError text={errors.firstname} />}


            <Form.Field error={!!errors.lastname}>
            <label htmlFor="lastname">lastname</label>
            <input
             type="text" 
             id="lastname" 
             name="lastname" 
             placeholder="your lastname"
             value={data.lastname} 
             onChange={this.onChange} />
             
             </Form.Field>
            {errors.lastname && <InlineError text={errors.lastname} />}











          
             <Form.Field error={!!errors.email}>
            <label htmlFor="email">Email</label>
            <input
             type="email" 
             id="email" 
             name="email" 
             placeholder="example@example.com"
             value={data.email} 
             onChange={this.onChange} />
             
             </Form.Field>
            {errors.email && <InlineError text={errors.email} />}
        
            
            <Form.Field error={!!errors.password}>
             <label htmlFor="password">password</label>
            <input
             type="password" 
             id="password" 
             name="password" 
             placeholder="password"
             value={data.password} 
             onChange={this.onChange} />
             </Form.Field>
             

             {errors.password && <InlineError text={errors.password} />}


            
            
            
            <Button primary>login</Button>
            
            </Form>
            
            
            
            


        )
    }


}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};


export default LoginForm;