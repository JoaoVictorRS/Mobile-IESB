import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Pagina1 from './screens/Pagina1';
import Pagina2 from './screens/Pagina2';
import Pagina3 from './screens/Pagina3';
import Arrays from './screens/Arrays';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Objeto from './screens/Objeto';
import Estado from './screens/Estado';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="objeto" component={Objeto} options={{ title: "Carros"}} />
        <Stack.Screen name="estado" component={Estado} options={{ title: "Estado"}} />
        <Stack.Screen name="arrays" component={Arrays} options={{ title: "Arrays"}} />
        <Stack.Screen name="pagina1" component={Pagina1} options={{ title: "Página Principal" }} />
        <Stack.Screen name="pagina2" component={Pagina2} options={{ title: "Cards" }} />
        <Stack.Screen name="pagina3" component={Pagina3} options={{ title: "Nomes" }} />
      </Stack.Navigator>
    </NavigationContainer>

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