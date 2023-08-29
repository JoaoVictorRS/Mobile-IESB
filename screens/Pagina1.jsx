import React from 'react'
import Card from '../components/Card'
import { Button, Text } from 'react-native'

const Pagina1 = ({navigation}) => {

    return (
        <>

            <Button title="Página 2" onPress={()=>navigation.navigate('pagina2')}/>
            <Button title="Página 3" onPress={()=>navigation.navigate('pagina3')}/>

            <Card titulo="Cringe" text="Intankavel demais vsfd">
                <Text>Paragrafo 1</Text>
                <Text>Paragrafo 2</Text>
                <Text>Paragrafo 3</Text>
                <Button title='Saiba Mais' />
            </Card>

            <Card titulo="Gado" text="Abuble abuble abuble >:)">
                <Text>Roubaram meu pau :(</Text>
                <Text>Capado</Text>
                <Text>Canalha :(</Text>
                <Button title='Escutar' />
            </Card>
            <Card titulo="Goreu" text="Uma vez flamengo, sempre flamengo"></Card>
            <Card titulo="Naoooo" text="Muito triste as coisas não é mesmo?"></Card>
        </>
    )
}

export default Pagina1