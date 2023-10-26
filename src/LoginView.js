import { StatusBar } from 'expo-status-bar'; // barra de estados
import { Component } from 'react'; // Componente
import { StyleSheet, View, Text, Button, Switch, TextInput, Alert} from 'react-native'; // Componente view

export default class LoginView extends Component { // Componente principal de la app
  constructor(props) {
    super(props)
    this.state = {
      switchValue: false,
      textValue: '',
    }
  }

  // switch
  onChangeSwitch = (value) => {
    console.warn(`El switch cambiara a: ${value}`);// Lanza un mensaje de cambio de estado ¿
    this.setState({switchValue: value}) // Cambia el valor del estado del switch
  }


  // textInput
  onChangeTextInput = (value) => {
    this.setState({textValue: value})
    console.log(`El valor del input es: ${value}`)
  }

  // button
  onPressLearnMore() {
    console.warn('Presionaste un boton');
  }

  showAlert () {
    Alert.alert(
      'Angeles',
      `${this.state.textValue}`,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    );
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Button
          /*onPress={this.onPressLearnMore}*/
          onPress={this.showAlert.bind(this)}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <Switch
          onValueChange={()=> this.onChangeSwitch(!this.state.switchValue)}
          value={this.state.switchValue}
        />

        <TextInput 
          style={styles.input}
          onChangeText={(text)=> this.onChangeTextInput(text)}
          value = {this.state.textValue}
        />

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { //button
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: { //inputText
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});