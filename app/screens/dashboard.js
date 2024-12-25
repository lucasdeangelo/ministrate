import { StyleSheet, Text, View, TouchableOpacity, Modal, Image} from 'react-native'
import React, { useState } from 'react'

export default function Dashboard({ navigateTo, onLogout }) {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View style={styles.container}>      
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.menuButton}>
        <Image source={require('../../assets/icons/hamburguer-menu.png')}/>
      </TouchableOpacity>


      <Modal
        visible={modalVisible}
        animationType='none'
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
              <Image source={require('../../assets/icons/back.png')}/>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigateTo('Perfil')} style={styles.modalOption}>
              <Image source={require('../../assets/icons/user.png')}/>
              <Text style={styles.modalButtonText}>Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateTo('Pesquisa')} style={styles.modalOption}>
              <Image source={require('../../assets/icons/lupa.png')}/>
              <Text style={styles.modalButtonText}>Pesquisa</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateTo('Eventos')} style={styles.modalOption}>
              <Image source={require('../../assets/icons/calendario.png')}/>
              <Text style={styles.modalButtonText}>Eventos</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateTo('Biblioteca')} style={styles.modalOption}>
              <Image source={require('../../assets/icons/livro.png')}/>
              <Text style={styles.modalButtonText}>Biblioteca</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateTo('Configuracoes')} style={styles.modalOption}>
              <Image source={require('../../assets/icons/config.png')}/>
              <Text style={styles.modalButtonText}>Configurações</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateTo('Ajuda')} style={styles.modalOption}>
              <Image source={require('../../assets/icons/ajuda.png')}/>
              <Text style={styles.modalButtonText}>Ajuda</Text>
            </TouchableOpacity>


            <TouchableOpacity 
              onPress={onLogout}
              style={{...styles.modalOption, position: 'absolute', bottom: 10, borderBottomWidth: 0}}
            >
              <Image source={require('../../assets/icons/off.png')}/>
              <Text style={styles.modalButtonText}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      
        {/* codigo de renderização de textos */}
        
        
      <TouchableOpacity onPress={() => navigateTo('NovoTexto')} style={styles.addButton}>
        <Image source={require('../../assets/icons/add.png')}/>
      </TouchableOpacity>        
      
    </View>
  );  
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
  },
  menuButton: { 
    height: 40,
    width: 40,  
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1C0080', 
    borderRadius: 8,
    marginTop: 30,
    marginLeft: 30
  },
  menuText: { 
    color: '#FFF' 
  },
  modalOverlay: { 
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.5)', 
    justifyContent: 'left', 
    alignItems: 'left', 
  },
  modalContent: { 
    width: '70%', 
    height: '100%',
    backgroundColor: '#FFF', 
    padding: 30, 
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30
  },
  title: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 10 
  },
  modalButton: {     
    backgroundColor: '#1C0080', 
    height: 40,
    width: 40, 
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalButtonText: { 
    color: '#000', 
    fontWeight: 'bold',
    textAlign: 'center', 
    marginLeft: 10    
  },
  modalOption: {    
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18, 
    borderBottomWidth: 1, 
    borderBottomColor: '#DDD' 
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: '#1C0080',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
})