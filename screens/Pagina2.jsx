import React from 'react'
import { Button } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';

const Pagina2 = () => {

    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

    return (
        <>

            <Card style={{ marginBottom: 20, backgroundColor: "gray" }}>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                <Card.Content>
                    <Text variant="titleLarge">Card title</Text>
                    <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>

            <Card style={{ backgroundColor: "gray" }}>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Content style={{ marginTop: 10 }}>
                    <Text variant="titleLarge">Card title</Text>
                    <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
            </Card>

        </>
    )
}

export default Pagina2