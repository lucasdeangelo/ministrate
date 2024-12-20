import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Dashboard({ navigateTo }) {
  return (
    <View>
      <Text>dashboard</Text>
      <View style={styles.createAccount}>
        <Text style={styles.h3}>Não tem conta?</Text>
        <TouchableOpacity onPress={() => navigateTo('Cadastro')}>
          <Text style={styles.span}> Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})