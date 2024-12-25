import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function MenuInferior() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity>
          <Image source={require('../../assets/icons/marcador.png')} style={styles.image}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../../assets/icons/alinhar.png')} style={{...styles.image}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../../assets/icons/negrito.png')} style={{...styles.image, height: 24}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../../assets/icons/italico.png')} style={{...styles.image, height: 24}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../../assets/icons/lista.png')} style={styles.image}/>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C0080',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        bottom: 0,
        left:0,
        right: 0,
    },
    main: {
        display: 'flex',
        flexDirection: 'row',        
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,    
    },
    image: {
        width: 19,
        height: 19,
    },
    option: {
        flex: 1,
        alignItems: 'center',
    },
})