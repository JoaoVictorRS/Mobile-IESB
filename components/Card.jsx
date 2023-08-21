import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = () => {
  return (
    <>
        <View style={styles.card}>
            <Text style={styles.titulo}>Hello World!</Text>
            <Text style={styles.paragrafo2}>Segundo Card</Text>
        </View>
    </>
  )
}

export default Card

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