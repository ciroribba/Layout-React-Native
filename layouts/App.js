import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';


const App = () => {
    
  return (
    <>
    <View style={styles.contenedor}>
      <View style={styles.caja1}></View>
      <View style={styles.caja2}></View>
      <View style={styles.caja3}></View>
      <View style={styles.caja4}></View>
    </View>
    </>    
  );
};

const styles = StyleSheet.create({
  // contenedor: {
  //   backgroundColor: 'cornflowerblue',
  //   flex: 1,//tiene q crecer el padre p q crezca el hijo
  //   flexDirection: 'column', //default
  //   //flexDirection: 'column-reverse', //los manda al fondo y los invierte
  //   //flexDirection: 'row', //en react este es default
  // },
  // caja1: {
  //   padding: 20,
  //   backgroundColor: 'navy',
  //   flex: 1,
  // },
  // caja2: {
  //   padding: 20,
  //   backgroundColor: 'yellow',
  //   flex: 1,
  // },
  // caja3: {
  //   padding: 20,
  //   backgroundColor: 'green',
  //   flex: 2,
  // },
  // caja4: {
  //   padding: 20,
  //   backgroundColor: 'teal',
  //   flex: 2,
  // },
  contenedor: {
    backgroundColor: 'cornflowerblue',
    flex: 1,
    flexDirection: 'row', 
    // justifyContent: 'flex-end', //ejemplo de distribucion horizontal
    // justifyContent: 'center',
    justifyContent: 'space-around',
    //alignItems: 'flex-start',
    alignItems: 'center',
    // flexDirection: 'column', // centrado en columna vertical
    // justifyContent: 'center'
  },
  caja1: {
    padding: 20,
    backgroundColor: 'navy',
  },
  caja2: {
    padding: 20,
    backgroundColor: 'yellow',
  },
  caja3: {
    padding: 20,
    backgroundColor: 'green',
  },
  caja4: {
    padding: 20,
    backgroundColor: 'teal',
  },
});

export default App;
