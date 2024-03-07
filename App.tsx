import React from "react";
import {Image, StyleSheet, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.city}>Presidente Epitácio</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.temperature}>55°C</Text>
        <Image source={require('./src/assets/imagens/icon3.png')}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomImage: {

  },
  header: {

  },
  city: {

  },
  weatherIcon: {

  },
  detailsContainer: {

  },
  weatherCondition: {

  },
  temperature: {

  },
  container: {

  },
  text: {

  }
  
});

export default App;