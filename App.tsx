import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [radius, onChangeRadius] = React.useState('');
  const [height, onChangeHeight] = React.useState('');
  const [surface, onChangeSurface] = React.useState('0');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Henger felszín kalkulátor</Text>

      <View>
        <Text>A henger sugara: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeRadius}
          value={radius}
          placeholder="Sugár"
          keyboardType="numeric"
        />
      </View>

      <View>
        <Text>A henger magassága: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeHeight}
          value={height}
          placeholder="Magasság"
          keyboardType="numeric"
        />
      </View>
        <Button
        //s = 2pr2+2prh = 2pr(r+h)
          title= "Számítás"
          onPress={() => {
            let r:number = parseFloat(radius)
            let h:number = parseFloat(height)
            let s:number = 0
            if (r > 0 && h > 0) {
              let s:number = 2*Math.PI*r*(r+h)
              onChangeSurface((Math.round(s*100)/100).toString())
            }
            else {
              onChangeSurface(s.toString())
            }
          }}
        />
      <View>
        <Text style={styles.solution}>A henger felülete {surface}</Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: "aquamarine",
    padding: 20,
    fontSize: 50
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  solution: {
    padding: 10,
    fontSize: 20
  }
});
