import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import MenuInferior from '../components/menuInferior'

export default function NovoTexto({ navigateTo }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateTo('Dashboard')} style={styles.backButton}>
        <Image source={require('../../assets/icons/back.png')}/>
      </TouchableOpacity>

      <TextInput
        style={styles.titleInput}
        placeholder='Título'
      />

      <View style={styles.options}>
        <Text style={styles.optionsTitle}>Criado em</Text>
        <Text style={styles.optionsTxt}>16 de dezembro de 2024 19:07</Text>
      </View>

      <View style={styles.options}>
        <Text style={styles.optionsTitle}>Tipo</Text>
        <Text style={{...styles.optionsTxt, marginLeft: 80}}>Vazio</Text>
      </View>

      <View style={styles.options}>
        <Text style={styles.optionsTitle}>Tema</Text>
        <Text style={{...styles.optionsTxt, marginLeft: 72}}>Vazio</Text>
      </View>


      <TextInput
        style={styles.txtInput}
        placeholder='Escreva o texto aqui..'
        multiline={true}
      />

      <MenuInferior/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    marginHorizontal: 30,
  },
  backButton: {     
    backgroundColor: '#1C0080', 
    height: 40,
    width: 40, 
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  titleInput: {
    marginVertical: 30,
    color: '#C6C6C6',
    fontWeight: 'bold',
    fontSize: 32,    
  },
  options: {
    display: 'flex',
    flexDirection: 'row'
  },
  optionsTitle: {
    color: '#939191',
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 6
  },
  optionsTxt: {
    color: '#C6C6C6',
    fontWeight: 'bold',
    fontSize: 13,
    marginLeft: 40,
    marginVertical: 6
  },
  txtInput: {
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    marginVertical: 30,
    color: '#C6C6C6',
    fontWeight: 'regular',
    paddingTop: 20, 
    fontSize: 15, 
    textAlignVertical: 'top',
    flex: 1,
    marginBottom: 30,
  }
})