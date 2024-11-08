import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface props {
    lastTime?: number
}

export default function LastTime(props: props) {
  return (
    <View>
      <Text style={styles.text}>Ultimo tempo: {props.lastTime?.toFixed(1) ?? '0.00'}s</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontStyle: 'italic',
        fontSize: 48
    }
})