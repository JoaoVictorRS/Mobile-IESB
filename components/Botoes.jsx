import React from 'react'
import { Button } from 'react-native'


const Botoes = () => {
    return (
        <>
            <Button
                onPress={onPressLearnMore}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </>
    )
}

export default Botoes