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
        foto: 'https://imperiocarmultimarcas.com.br/carros/6380396463cb571bf12441b0192fa7e0-thumbjpeg-chevrolet-celta-9011507-900-675-70.jpg'
    },
    {
        marca: 'Fiat',
        modelo: 'Pálio',
        ano: 1995,
        cor: 'Vermelho',
        foto: 'https://uploads.vrum.com.br/2022/06/Fiat-Palio-EDX-modelo-1996-vermelho-quatro-portas.jpg'
    },
    {
        marca: 'VW',
        modelo: 'Gol',
        ano: 2010,
        cor: 'Prata',
        foto: 'https://image1.mobiauto.com.br/images/api/images/v1.0/82106955/transform/fl_progressive,f_webp,q_95'
    },
    {
        marca: 'Ford',
        modelo: 'Ka',
        ano: 2020,
        cor: 'Branco',
        foto: 'https://carango.com.br/f.php?w=810&h=620&cc=0&zc=1&src=https://carango.nyc3.digitaloceanspaces.com/images/veiculos/2022/09/ford-ka-2020-1-0-se-plus-4p-flex-manual-flex-107651-efvlp7.jpg'
    }]

    return (
        <>

            {carros.map(item => (
                <>
                    <Card style={{margin:15}}>
                        <Card.Content>
                            <Text variant="titleLarge">{item.modelo} - {item.marca}</Text>
                            <Text variant="bodyMedium">{item.ano}</Text>
                            <Text>"{item.cor}"</Text>
                        </Card.Content>
                        <Card.Cover source={{ uri: item.foto }} />
                    </Card>
                </>
            ))}

        </>
    )
}

export default Objeto