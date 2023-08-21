import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';

export default function App() {
  return (
    <ScrollView style={{marginTop: 30}}>
      
      <View style={styles.card}>
        <Text style={styles.titulo}>Hello World!</Text>
        <Text style={styles.paragrafo2}>Paragrafo</Text>
        <Text style={styles.paragrafo}>Paragrafo</Text>
        <Text style={styles.paragrafo2}>Paragrafo</Text>
      </View>

      <Card></Card>

      <View style={styles.card}>
        <Text style={styles.titulo}>Hello World!</Text>
        <Text style={styles.paragrafo2}>Segundo Card</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.titulo}>Hello World!</Text>
        <Text style={styles.paragrafo2}>Terceiro Card</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 2,
    marginBottom: 20
  },
  titulo: {
    color: '#fff',
    fontSize: '2em',
    padding: '30px',
    marginBottom: '20px',
    borderBottomColor: 'red',
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
    textAlign: 'center',
    backgroundColor: 'red'
  },
  paragrafo: {
    fontSize: '10px'
  },
  paragrafo2: {
    fontSize: '20px'
  }

});