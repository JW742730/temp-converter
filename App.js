import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Alert } from 'react-native';
import { Link, NavigationContainer, StackActions } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { color } from 'react-native-reanimated';


SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const sunPicture = require("./sun.jpg");
const fourSeasons = require("./fourSeasons.jpg");



function Home() {
  return(
    <View style={styles.container}>
      <Text style={styles.heading}>History</Text>
      <Text style={styles.paragraphText}>Daniel Gabriel Fahrenheit (1686-1736) was the German physicist who invented the alcohol thermometer in 1709, and the mercury thermometer in 1714. In 1724, he introduced the temperature scale that bears his name - Fahrenheit Scale. Anders Celsius was born in Uppsala, Sweden in 1701, where he succeeded his father as professor of astronomy in 1730. It was there that he built Sweden's first observatory in 1741, the Uppsala Observatory, where he was appointed director. He devised the centigrade scale or "Celsius scale" of temperature in 1742.</Text>
    </View>
  )
}

function FahrenheitConverter() {
  const [fAmount, onChangeFAmount] = React.useState()
  const [cAmount, onChangeCAmount] = React.useState()
  return(
    <View style={styles.container}>
      <Text style={styles.heading}>Fahrenheit to Celsius</Text>
      <Image source={fourSeasons} style={styles.seasonsPicture}/>
      <TextInput
        style={styles.tempEntry}
        placeholder="Enter a temperature in Fahrenheit"
        onChangeText={onChangeFAmount}
        value={fAmount}
      />
      <Pressable style={styles.container}
        onPress={() => { if (!isNaN(fAmount)) {

        
          onChangeCAmount((((fAmount - 32) * 5) / 9).toFixed(2))
          
        }
        else {
          Alert.alert("You must enter a numeric value.")
        }
        }}>

      <Text style={styles.buttonStyle}>Convert to Celsius</Text>
      {cAmount  ? (

        <Text style={styles.tempConverion}>Temp in Celsius: {cAmount} </Text>
      ) : (null)
}
      </Pressable>
    </View>
  )
}

function CelsiusConverter() {
  const [cAmount, onChangeCAmount] = React.useState()
  const [fAmount, onChangeFAmount] = React.useState()
  return(
    <View style={styles.container}>
      <Text style={styles.heading}>Celsius to Fahrenheit</Text>
      <Image source={fourSeasons} style={styles.seasonsPicture}/>
      <TextInput
        style={styles.tempEntry}
        placeholder="Enter a temperature in Celsius"
        onChangeText={onChangeCAmount}
        value={cAmount}
      />
      <Pressable style={styles.container}
        onPress={() => { if (!isNaN(cAmount)) {

          onChangeFAmount((((cAmount * 9) / 5) + 32).toFixed(2))

        }
        else {
          Alert.alert("You must enter a numeric value.")
        }
        }}>

      <Text style={styles.buttonStyle}>Convert to Fahrenheit</Text>
      {fAmount  ? (

        <Text style={styles.tempConverion}>Temp in Fahrenheit: {fAmount} </Text>
      ) : (null)
}
      </Pressable>
    </View>
  )
}

const Drawer = createDrawerNavigator();

export default function App() {
  
  
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="History" style={styles.drawer}
        screenOptions={{
          overlayColor: "#ede2e0",
          drawerInactiveBackgroundColor: "#ede2e0",
          drawerActiveTintColor: "white",
          backgroundColor: "#ede2e0",
          headerTitle: "",
          headerTintColor: "white",
          headerPressColor: "#7d5540",
          headerStyle: {
            backgroundColor: "#7d5540"
          },
          drawerStyle: {
            backgroundColor: "#7d5540",
            
          }
        }}
      >
        <Drawer.Screen
          name="History"
          component={Home} 
        />
        <Drawer.Screen
          name="Fahrenheit to Celsius"
          component={FahrenheitConverter} 
        />
        <Drawer.Screen
          name="Celsius to Fahrenheit"
          component={CelsiusConverter} 
        />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ede2e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  seasonsPicture: {
    height: 340, 
    width: 320,
    marginBottom: 20,
    marginTop: 10
  },
  tempEntry: {
    marginTop: 0,
    fontSize: 20,
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: "#7d5540",
    padding: 8,
    backgroundColor: "white",
  },
  heading: {
    fontSize: 30,
    marginBottom: 0,
    marginTop: 10,
    fontWeight: 'bold',
  },
  drawer: {
    backgroundColor: "#7d5540",
  },
  buttonStyle: {
    backgroundColor: '#7d5540',
    fontSize: 20,
    padding: 7,
    marginTop: 0,
    color: "white"
  },
  tempConverion: {
    fontSize: 30,
    marginTop: 40,
  },
  paragraphText: {
    fontSize: 20,
    padding: 7
  }
});
