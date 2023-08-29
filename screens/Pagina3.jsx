import React from 'react'
import { Avatar, Card, Text } from 'react-native-paper';
import { Button } from 'react-native';


const Pagina3 = () => {

    const LeftContent = props => <Avatar.Icon {...props} icon="account" />

    return (
        <>

            <Card style={{ marginBottom: 20}}>
                <Card.Title title="João" subtitle="Aluno de ADS" left={LeftContent} />
            </Card>
                <Card style={{ marginBottom: 20}}>
                <Card.Title title="Victor" subtitle="Aluno de ADS" left={LeftContent} />
            </Card>
            <Card style={{ marginBottom: 20}}>
                <Card.Title title="Rodrigues" subtitle="Aluno de ADS" left={LeftContent} />
            </Card>
            <Card style={{ marginBottom: 20}}>
                <Card.Title title="Souza" subtitle="Aluno de ADS" left={LeftContent} />
            </Card>
            <Card style={{ marginBottom: 20}}>
                <Card.Title title="Felipe" subtitle="Aluno de ADS" left={LeftContent} />
            </Card>

        </>
    )
}

export default Pagina3