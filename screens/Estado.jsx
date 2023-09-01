import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import styles from '../styles/styles'

const Estado = () => {

  const [qnt, setqnt] = useState(0)


  return (
    <>
      <View style={styles.linha}>
        <Button mode="contained" onPress={() => setqnt(qnt - 1)}>-</Button>
        <Text style={styles.espacamento}>{qnt}</Text>
        <Button mode="contained" onPress={() => setqnt(qnt + 1)}>+</Button>
      </View>
    </>
  )
}

export default Estado