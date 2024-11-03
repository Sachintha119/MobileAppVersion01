import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, Text, View, ImageBackground, Image, TextInput, TouchableOpacity } from "react-native";

export default function App(){
  return(
    <View style={styles.container}>

{/* Background Image */}
      <ImageBackground source={require('./assets/images/wallpaper.jpg')} style={styles.backgroundImage}>
      </ImageBackground>

{/* app name */}
      <Text style={styles.appname}>Hello World!!</Text>
      
{/* Logo */}
      <Image source={require('./assets/images/logo.png')} style={styles.logo} />

{/* Text field for user name */}
      <TextInput 
      style={styles.input} 
      placeholder="User Name"
      // value={userName}
      // onChangeText={setUserName}
      autoCapitalize="none"
      />

{/* Text field for Password */}
      <TextInput 
      style={styles.input} 
      placeholder="Password"
      // value={password}
      // onChangeText={password}
      autoCapitalize="none"
      />

{/* Login Button */}
      <TouchableOpacity style={styles.loginbutton} >
        <Text style={styles.logintext}>Login</Text>
        </TouchableOpacity>

{/* signup Button */}
<TouchableOpacity style={styles.signupbutton} >
        <Text style={styles.signuptext}>Signup</Text>
        </TouchableOpacity>

{/* Loging With Facebook Button */}
<TouchableOpacity style={styles.facebook} >
        <Text style={styles.facetext}>Continue With Facebook</Text>
        </TouchableOpacity>

{/* Loging With Google Button */}
<TouchableOpacity style={styles.google} >
        <Text style={styles.googletext}>Continue With Google</Text>
        </TouchableOpacity>

{/* Loging With Email Button */}
<TouchableOpacity style={styles.email} >
        <Text style={styles.emailtext}>Continue With Email</Text>
        </TouchableOpacity>

{/* finish line -------------------------------------------------------------------------------------- */}
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    marginTop:50,
    justifyContent:"center",
  },

  backgroundImage:{
    width: '100%', 
    height: '100%',
    position: 'absolute' 

  },
  appname:{  
    alignItems:"center",
    margin:10,
    fontWeight:"bold",
    fontSize:20,
    fontStyle:"italic"
  },

  logo:{
    width:100,
    height:100,
    marginBottom:30,
    padding:20,
    margin:20,
    borderRadius:25
  },

  input:{
    width:'70%',
    height: 50,
    borderColor:"#808080",
    borderWidth:1,
    borderRadius:8,
    paddingHorizontal:10,
    marginBottom:20,
    backgroundColor:'rgba(255, 255, 255, 0.5)',
    textAlign:"center"
  },

  loginbutton:{
    backgroundColor:'rgba(0, 0, 255, 0.6)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius:8,
    width:"70%",
    marginBottom:10,
  },

  logintext:{
    color:"#f8f8ff",
    textAlign:"center",
    fontWeight:"bold"
  },

  signupbutton:{
    backgroundColor:'rgba(0, 0, 255, 0.6)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius:8,
    width:"70%",
    marginBottom:10,
  },

  signuptext:{
    color:"#f8f8ff",
    textAlign:"center",
    fontWeight:"bold"
  }
})