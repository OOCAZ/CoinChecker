import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import axios from 'axios';

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
    <View style={styles.container}>
      <Text
          color = '#ffffff' 
        ></Text>
        <Text
          color = '#ffffff' 
        ></Text>
        <Text
          style={{color: "white"}}
        >Built by PWR4G Studios / Zac Poorman</Text>
        <Text
          color = '#ffffff' 
        ></Text>
        <Text
          style={{color: "white"}} 
        >Lookup the Github to get involved in making this better!</Text>
        <Text
          color = '#ffffff' 
        ></Text>
        <Text
          color = '#ffffff' 
        ></Text>
        <Text
          color = '#ffffff' 
        ></Text>
        <Text
          color = '#ffffff' 
        ></Text>
        <Text
          color = '#ffffff' 
        ></Text>
        <Text
          color = '#ffffff' 
        ></Text>
        <Text
          color = '#ffffff' 
        ></Text>
       <Text style={{color: "white"}}>Enter the currency to check in USD and then press the button!</Text>
      <StatusBar style="auto" />
      <Text
          style={{color: "white"}} 
        ></Text>
      <TextInput
        autoCapitalize="none"
        placeholder="eg. bitcoin or dogecoin"
        style={{color: "white"}}
        onChangeText={(coinToChoose) => { this.setState({coinToChoose: coinToChoose})} }
        value={this.state.coinToChoose}
      />
      <TextInput
        autoCapitalize="none"
        placeholder="eg. usd of eur"
        style={{color: "white"}}
        onChangeText={(currecyToChoose) => { this.setState({currecyToChoose: currecyToChoose})} }
        value={this.state.currecyToChoose}
      />
      <Text
          style={{color: "white"}} 
        ></Text>
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
        color="#841584"
        accessibilityLabel="Press to find the crypto price"/>
        <Text
          style={{color: "white"}}
        ></Text>
        <Text 
          placeholder="price will appear here" 
          style={{color: "white"}} 
        >Price Per Coin: {this.state.coinPrice}</Text>
        <Text 
          placeholder="last updated date will appear here"
          style={{color: "white"}}
        >Last Updated: {this.state.lastUpdate}</Text>
        <Text 
          placeholder="24 high will appear here"
          style={{color: "white"}} 
        >24 Hour High: {this.state.high24}</Text>
        <Text 
          placeholder="24 low will appear here"
          style={{color: "white"}} 
        >24 Hour Low: {this.state.low24}</Text>
        <Text
          style={{color: "white"}} 
        ></Text>
        <Text 
          placeholder="24 low will appear here"
          style={{color: "white"}}
        > Please note: Type coins and currencies in all lower case! </Text>
        <Text
          color = '#ffffff' 
        ></Text>
        <Text
          color = '#ffffff' 
        ></Text>
        <Text
          color = '#ffffff' 
        ></Text>
        <Text
          color = '#ffffff' 
        ></Text>
        <Text
          color = '#ffffff' 
        ></Text>
        <Text
          color = '#ffffff' 
        ></Text>
        <Text
          color = '#ffffff' 
        ></Text>
        <Text
          color = '#ffffff' 
        ></Text>
        <Text
          style={{color: "white"}} 
        ></Text>
        <Text
          style={{color: "white"}} 
        ></Text>
        <Text
         style={{color: "white"}} 
        ></Text>
        <Text
          style={{color: "white"}} 
        ></Text>
        <Text
          style={{color: "white"}} 
        >Thanks to Coingecko for the free API</Text>
        
    </View>

  );
}
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4777d7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
