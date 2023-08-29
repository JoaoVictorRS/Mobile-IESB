import React from 'react'
import { Card, Text } from 'react-native-paper'

const Objeto = () => {

    const carros = [{
        marca: 'VW',
        modelo: 'Fusca',
        ano: 1978,
        cor: 'Preto',
        foto: 'https://2.bp.blogspot.com/-HWkL9IWULig/UiOB1HDxydI/AAAAAAAAAbU/zZI7NrQbzyI/s1600/Fuscao_Preto.jpg'
    },
    {
        marca: 'GM',
        modelo: 'Celta',
        ano: 2003,
        cor: 'Preto',
        foto: ''
    },
    {
        marca: 'Fiat',
        modelo: 'Pálio',
        ano: 1995,
        cor: 'Azul',
        foto: ''
    },
    {
        marca: 'VW',
        modelo: 'Gol',
        ano: 2010,
        cor: 'Vermelho',
        foto: ''
    },
    {
        marca: 'Ford',
        modelo: 'Ka',
        ano: 2020,
        cor: 'Prata',
        foto: ''
    }]

    return (
        <>

            {carros.map(item => (
                <>

                    <Card style={{ marginBottom: 20, backgroundColor: "gray" }}>
                        <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                        <Card.Content>
                            <Text variant="titleLarge">{item.marca}</Text>
                            <Text variant="bodyMedium">{item.modelo}</Text>
                        </Card.Content>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    </Card>

                </>
            ))}

        </>
    )
}

export default Objeto