//Origianl commits by Zac Poorman : OOCAZ
//5/26/2021 date of origin
//This is the file that controls the whole app, if you have an idea to make this
//app better just ask and we will make it better together.

//Please feel free to comment in the code where you made changes so that people get to see you work.

//Also I know its ugly...

import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';

//URL to call for Doge 
//https://api.coingecko.com/api/v3/coins/dogecoin



class App extends Component {
  constructor(){
    super()
    this.state = {
      coinToChoose: '',
      currecyToChoose: '',
      coinPrice: 'Rate will appear here',
      lastUpdate: 'Last update will appear here',
      high24: '24 hour high will appear here',
      low24: '24 hour low will appear here'
  }
  
  };
  render(){
  return (
    <ScrollView style={styles.container} >
    
      
        <Text
          style={styles.textTop}
        >Built by PWR4G Studios / Zac Poorman</Text>
        <Text
          style={styles.textUpper} 
        >Lookup the Github to get involved in making this better!</Text>
       
      <StatusBar style="auto" />
      <Text
          style={{color: "white"}} 
        ></Text>
      <TextInput
        style={styles.textInput}
        placeholderTextColor="white"
        mode="outlined"
        autoCapitalize="none"
        placeholder="eg. bitcoin or dogecoin"
        onChangeText={(coinToChoose) => { this.setState({coinToChoose: coinToChoose})} }
        value={this.state.coinToChoose}
      />

      <TextInput
        autoCapitalize="none"
        placeholder="eg. usd of eur"
        placeholderTextColor="white"
        style={styles.textInput}
        onChangeText={(currecyToChoose) => { this.setState({currecyToChoose: currecyToChoose})} }
        value={this.state.currecyToChoose}
      />
      <View style={{color: "white", alignSelf:'center', paddingHorizontal: 100}}>
      <Button
        onPress={ () => {
          URL = "https://api.coingecko.com/api/v3/coins/" + this.state.coinToChoose
          axios.get(URL.toString(), { headers: { accept: "application/json" } })
          .then(response => {
           // If request is good...
           console.log("successfully got request");
           console.log(response.data);
           var builtPrice = "response.data.market_data.current_price." + this.state.currecyToChoose
           var builtDate = "response.data.last_updated"
           var builthigh24 = "response.data.market_data.high_24h." + this.state.currecyToChoose
           var builtlow24 = "response.data.market_data.low_24h." + this.state.currecyToChoose
           //eval() function allows us to interpret a string as a variable name or math operation
           this.setState({ coinPrice: eval(builtPrice)})
           this.setState({ lastUpdate: eval(builtDate)})
           this.setState({ high24 : eval(builthigh24)})
           this.setState({ low24 : eval(builtlow24)})
           //setState({ coinPrice: response.data.market_data.current_price.usd  }) 
           console.log(this.state.coinPrice)
           console.log(this.state.lastUpdate)
           console.log(this.state.high24)
           console.log(this.state.low24)
           
        })
       .catch((error) => {
           console.log('error ' + error);
        });}
        }
        title="Check Price"
        color="#0B8CFD"
        
        accessibilityLabel="Press to find the crypto price"/>
        </View>
        <Text 
          placeholder="price will appear here" 
          style={styles.textLower} 
        >Price Per Coin: {this.state.coinPrice}</Text>
        <Text 
          placeholder="last updated date will appear here"
          style={styles.textLower}
        >Last Updated: {this.state.lastUpdate}</Text>
        <Text 
          placeholder="24 high will appear here"
          style={styles.textLower} 
        >24 Hour High: {this.state.high24}</Text>
        <Text 
          placeholder="24 low will appear here"
          style={styles.textLower} 
        >24 Hour Low: {this.state.low24}</Text>
        
        <Text 
          placeholder="24 low will appear here"
          style={styles.textLower}
        > Please note: Type coins and currencies in all lower case! </Text>
        
        <Text
          style={styles.textLower} 
        >Thanks to Coingecko for the free API</Text>
        
  
    </ScrollView>

  );
}
  
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#27394A',
  },
  textUpper: {
   color: "white", 
   margin:15, 
   alignSelf: 'center'
  },
  textLower: {
    color: "white", 
    margin:10, 
    alignSelf: 'center'
   },
   textTop: {
    color: "white", 
    margin:50, 
    alignSelf: 'center'
   },
   textInput:{
    color: "white",  
    borderWidth: 2, 
    borderColor: "white", 
    padding: 10, 
    marginLeft: 40,
    marginRight:40,
    margin:15
   }
});

export default App;
