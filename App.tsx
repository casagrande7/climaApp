import React, { useState } from "react";
import {Image, StyleSheet, Text, View} from 'react-native';

function App(): React.JSX.Element {

const [city, setCity] = useState<string>("São Paulo");
const [humidity, setHumidity] = useState<string>("15");
const [condition, setCondition] = useState<string>("Ensolarado");
const [rainProbability, setRainProbability] = useState<string>("30");
const [feelsLike, setFeelsLike] = useState<string>("41");
const [temperature, setTemperature] = useState<string>("37");
const [night, setNight] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.city}>{city}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.temperature}>{temperature}°C</Text>
        <Image source={require('./src/assets/imagens/icon3.png')} style={styles.weatherIcon}/>
      </View>
      <View>
        <Text style={styles.weatherCondition}>{condition}</Text>
        <Text style={styles.text}>{feelsLike}°C</Text>
        <Text style={styles.text}>Probabilidade de Chuva: {rainProbability}%</Text>
        <Text style={styles.text}>Umidade: {humidity}%</Text>
      </View>
      <Image source={require('./src/assets/imagens/cidade.png')} style={styles.bottomImage}/>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomImage: {
    width: '115%',
    position: 'absolute',
    bottom: 0,
    resizeMode: 'cover',
    height: '57%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  city: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 25
  },
  weatherIcon: {
    width: 100,
    height: 100,
    alignSelf: 'flex-end',
    marginBottom: 20,
    flexDirection: 'row'
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weatherCondition: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginBottom: 20,
    color: '#fff'
  },
  temperature: {
    fontSize: 55,
    marginBottom: 20,
    color: '#fff'
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#09d3f3'
  },
  text: {
    fontSize: 17,
    color: '#fff',
    marginBottom: 10,
    fontStyle: 'italic'
  }
  
});

export default App;