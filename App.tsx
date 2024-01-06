import { Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [height,setHeight]=useState('');
  const [weight,setWeight]=useState('');
  let [result, setResult]=useState(0);

  let reset=()=>{
    setHeight('');
    setWeight('');
    setResult(0);
  }

  let calculateBMI=()=>{
    let Result=Number(weight)/((Number(height)/100)*(Number(height)/100));
    setResult(Result);
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWQwNPwVp58OnIA5N51_RDmAKnkOXe2ZgkDg&usqp=CAU'}}
      style={styles.image}></Image>
      <View style={styles.body}>
        <View>
          <Text style={styles.label}>Enter height(in Cms)</Text>
          <TextInput
            value={height}
            onChangeText={setHeight}
            style={styles.inputBox}
            keyboardType='numeric'
          />
        </View>
        <View>
          <Text style={styles.label}>Enter weight(in Kgs)</Text>
          <TextInput
            value={weight}
            onChangeText={setWeight}
            style={styles.inputBox}
            keyboardType='numeric'
          />
        </View>

        {result!=0?<View>
            <Text style={styles.result}>
              Result : {result}
            </Text>
          </View>:null
        }
        {result<18.5&&result!=0?<Text style={styles.resultText}>you are under weight !! put on some weight</Text>:null}
        {result>=18.5&&result<25?<Text style={styles.resultText}>you are healthy</Text>:null}
        {result>25?<Text style={styles.resultText}>you are over weight !! loose some weight</Text>:null}
        
        <TouchableHighlight 
          activeOpacity={0.8}
          underlayColor={'#EAF0F1'}
          style={styles.ButtonContainer}
          onPress={calculateBMI}
        >
          <View style={styles.myButton}>
            <Text style={{color:'white', fontSize: 16}}>Check my BMI</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight 
          activeOpacity={0.8}
          underlayColor={'#EAF0F1'}
          style={styles.ButtonContainer}
          onPress={reset}
        >
          <View style={styles.myButton}>
            <Text style={{color:'white', fontSize: 16}}>Reset</Text>
          </View>
        </TouchableHighlight>
        
    </View>
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  body:{
    padding:12,
    flex:1,
    justifyContent:'flex-start'
  },
  image:{
    height:100,
    width:'100%'
  },
  inputBox:{
    borderColor: '#2475B0',
    borderWidth:2,
    borderRadius: 10,
    marginBottom: 16
  },
  label:{
    color:'#000000',
    fontSize: 18
  },
  ButtonContainer:{
    marginBottom:10,
    marginTop: 10,
    paddingVertical:12,
    backgroundColor: '#1287A5',
    borderRadius: 8
  },
  myButton:{
    alignItems: 'center',
  },
  resultText:{
    color: '#2F363F',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  result:{
    color:'black', 
    fontSize:16, 
    fontWeight:'bold',
    textAlign: 'center'
  }
})