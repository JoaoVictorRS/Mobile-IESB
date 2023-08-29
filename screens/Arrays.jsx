import React from 'react'
import { Text } from 'react-native'

const Arrays = () => {

    const carros = ['Uno', 'Camaro', 'Fusca', 'Palio', 'Ka']

    const carro = {
        marca: 'VW',
        modelo: 'Fusca',
        ano: 1978,
        cor: 'Preto',
        foto: ''
    }

    return (
        <>

            <Text>{carro.marca} - {carro.modelo}</Text>

            {carros.map(item => (
                <Text>{item}</Text>
            ))}

        </>
    )
}

export default Arrays