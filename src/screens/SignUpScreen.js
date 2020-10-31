
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,FlatList} from 'react-native';
import {connect} from 'react-redux'
import {createEmailAccount, registerError} from '../redux/actions/authAction'



 class SignUpScreen extends Component  {

  constructor(props){
    super(props)
    this.state  = {
       email:"",
       password:"",
       passwordAgain:""
    }
  }

  handleUpdateState = (name,value)=>{
    this.setState({
      [name]:value
    }) 
  }

  handleOnSubmit = ()=>{


    if(this.state.password!==this.state.passwordAgain){
         this.props.registerError("password do not match")
         return;    
    }
       this.props.createEmailAccount(this.state.email, this.state.password)
  }
 
  render (){
    const {navigation, auth} =this.props
  

    return(
<View style={styles.container} >
  <View  style={styles.loginContainer}>
    <Text style={styles.loginText}>SIGN UP</Text> 
    
 </View>

  <View>
   {auth.error.register &&
   <Text style={{color:'red'}}>{auth.error.register}</Text>
   }
    <TextInput
     style={styles.input} 
     placeholderTextColor="#aaaaaa"
     value={this.state.email}
     placeholder ="Email" 
     onChangeText={(text)=>{
      this.handleUpdateState('email', text)}}>    
    </TextInput>

    <TextInput  style={styles.input}
     placeholderTextColor="#aaaaaa"
     secureTextEntry={true}
     placeholder= "paassword"
     value={this.state.password}
     onChangeText={(text)=>{
      this.handleUpdateState('password', text)}}>
    </TextInput>

    <TextInput  style={styles.input}
     placeholderTextColor="#aaaaaa"
     secureTextEntry={true}
    placeholder= "paassword again"
    value={this.state.passwordAgain}
    onChangeText={(text)=>
     { this.handleUpdateState('passwordAgain', text)}}>
     
    </TextInput>

    <TextInput style={styles.forgotPassword} >forgot password?</TextInput>
  </View>



<View>
    <TouchableOpacity  style={styles.buttonContainer} onPress={this.handleOnSubmit}>
    <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>

</View>


  <View style={styles.noAccountContainer}>
  <Text style={styles.noAccountText}>Do you already have an account?</Text>
    <TouchableOpacity>
      <Text
             
             onPress={()=>{
              navigation.navigate("LoginScreen")
          }}  
      
      style={styles.signUpText}>Log in</Text>
    </TouchableOpacity>
  </View>



</View>
    )


 }
 }


const styles = StyleSheet.create ({
container: {
  marginHorizontal:50,
  marginTop:50
},
loginText:{
fontSize:40,
color:"#6313bf"
}
,
loginContainer: {
  marginBottom:30
}
,
input:{
  borderBottomWidth:2 ,
  borderBottomColor:"#6313bf",
  fontSize:20,
  height:50
}, 

forgotPassword:{
alignSelf:"flex-end", 
marginVertical:3,
color:"#0853a8"
},

buttonContainer:{
height:50,
backgroundColor:"#6313bf",
justifyContent:"center",
alignItems:"center",
borderRadius:10,
marginVertical:50
},

buttonText:{
  color:"white",
  fontSize:20
},

noAccountContainer:{
  flexDirection:"row",
  justifyContent:"center",

}
,
noAccountText:{
marginRight:10,
fontSize:10
},
 
signUpText:{
fontSize:10,
color:"#6313bf"
}

})


const mapStateToProps = (state) => {

  return {auth:state}
} 

export default connect(mapStateToProps,{createEmailAccount, registerError})(SignUpScreen)


