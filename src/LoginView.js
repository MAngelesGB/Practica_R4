import { StatusBar } from 'expo-status-bar'; // barra de estados
import { Component } from 'react'; // Componente
import { StyleSheet, View, Text, Button, TextInput, Alert, Image} from 'react-native'; // Componente view

export default class LoginView extends Component { // Componente principal de la app
  constructor(props) {
    super(props)
    this.state = {
      valueEmail:false,
      valuePassword:false,
      emptyEmail:true,
      emtyPassword:true,
      textEmailValue: '',
      textPasswordValue: '',
    }
  }

  // textemail
  onChangeTextInputEmail = (email) => {
    this.setState({textEmailValue: email})
    const emailRegex = /[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    
    if(emailRegex.test(email))
      this.setState({valueEmail : true})
    else
      this.setState({valueEmail : false})
    
  }

  
  // textpassword
  onChangeTextInputPassword = (password) => {
    this.setState({textPasswordValue: password})
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;
    if(passwordRegex.test(password))
    this.setState({valuePassword: true})
    else
      this.setState({valuePassword: false})
  }


  showAlert () {
    if((this.state.textEmailValue.trim() === '') || (this.state.textPasswordValue.trim() ===''))
      Alert.alert('Campos vacios',`Ingrese la infotrmacion solicitada`);
    else{
      if(!this.state.valueEmail)
        Alert.alert('Email',`El formato de su correo electronico es incorrecto`);
      if(!this.state.valuePassword)
        Alert.alert('Contraseña',`La contraseña debe tener almenos 8 caracteres mayúsculas y mínusculas y un caracter especial`);
      if(this.state.valueEmail&&this.state.valuePassword)
        Alert.alert('información correcta',`Iniciando sesion. . .`);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.img_rock}
          source={require('../assets/rock.jpg')} 
        />
        
        <Text style={styles.text}>Email</Text>
        <TextInput 
          style={styles.input}
          onChangeText={(text)=> this.onChangeTextInputEmail(text)}
          value = {this.state.textEmailValue}
        />

        <Text style={styles.text}>Password</Text>
        <TextInput 
          style={styles.input}
          autoCapitalize='none'
          secureTextEntry={true}
          onChangeText={(text)=> this.onChangeTextInputPassword(text)}
          value = {this.state.textPasswordValue}
        />

        <Button
          onPress={this.showAlert.bind(this)}
          title="Login"
          color="#BCAAA4"
          accessibilityLabel="Learn more about this purple button"
        />

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { //view
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    width: 280,
    textAlign: 'left',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4E5157',
  },
  input: { //inputText
    height: 40,
    width: 280,
    margin: 12,
    paddingLeft:12,
    borderRadius: 10,
    backgroundColor: '#E8E9EA',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  img_rock:{ //image
    width: 200,
    height: 250,
    marginBottom: 20,
  },
});