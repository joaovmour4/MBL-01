import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import Timer from './components/timer';
import LastTime from './components/LastTime';

export default function Index() {
  const [cronStatus, setCronStatus] = React.useState<boolean>(false)
  const [time, setTime] = React.useState(0.0)
  const [timer, setTimer] = React.useState<NodeJS.Timeout>()
  const [lastTime, setLastTime] = React.useState<number>()

  const toggleTimer = () => {
    if (cronStatus) {
      clearInterval(timer)
      setCronStatus(false)
    } else {
      const newTimer = setInterval(() => {
        setTime(prevSeconds => prevSeconds + 0.1)
      }, 100)
      setTimer(newTimer)
      setCronStatus(true)
    }
  }

  const resetButton = () => {
    setLastTime(time)
    setCronStatus(false)
    clearInterval(timer)
    setTime(0)
  }

  React.useEffect(() => {
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [timer]);

  return (
    <View style={styles.view}>
      <Timer 
        time={time}
      />
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={resetButton}>
          <Text style={styles.buttonText}> 
            LIMPAR
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleTimer}>
          <Text style={styles.buttonText}>{cronStatus ? 'PARAR' : 'INICIAR'}</Text>
        </TouchableOpacity>
      </View>
      <LastTime lastTime={lastTime}/>
    </View>
  ); // Nota: Somente o botão de reset salva o tempo
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
    backgroundColor: '#00bfff',
  },
  buttonView: {
    flexDirection: 'row',
    gap: 25
  },
  button: {
    alignItems: "center",
    width: 150,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 5
  },
  buttonText: {
    color: '#00bfff',
    fontWeight: 'bold',
    fontSize: 32
  }
})