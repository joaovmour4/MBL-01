import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import cronImg from '../../assets/images/cronometro.png';

interface props {
    time: number
}

export default function Timer(props: props) {
  return (
    <View style={styles.cronView}>
        <Text style={styles.timerText}>
          {props.time.toFixed(1)}s
        </Text>
        <Image
          source={cronImg}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    cronView: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    timerText: {
        position: 'absolute',
        paddingTop: 45,
        color: 'white',
        fontSize: 72,
        fontWeight: 'bold',
    }
})