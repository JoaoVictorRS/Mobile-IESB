import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import Botoes from './components/Botoes';

export default function App() {
  return (
    <ScrollView style={{margin: 15}}>

      <Botoes/>

      <Card titulo="Cringe" text="Intankavel demais vsfd">
        <Text>Paragrafo 1</Text>
        <Text>Paragrafo 2</Text>
        <Text>Paragrafo 3</Text>
        <Button title='Saiba Mais'/>
      </Card>

      <Card titulo="Gado" text="Abuble abuble abuble >:)">
        <Text>Roubaram meu pau :(</Text>
        <Text>Capado</Text>
        <Text>Canalha :(</Text>
        <Button title='Escutar'/>
      </Card>
      <Card titulo="Goreu" text="Uma vez flamengo, sempre flamengo"></Card>
      <Card titulo="Naoooo" text="Muito triste as coisas não é mesmo?"></Card>

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