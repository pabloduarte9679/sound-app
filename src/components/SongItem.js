import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Recibimos datos y funciones (callbacks) vía Props
const SongItem = ({ title, artist, cover, onDelete }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: cover }} style={styles.cover} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.artist}>{artist}</Text>
      </View>
      {/* La función onDelete viene del padre, el hijo solo la ejecuta */}
      <TouchableOpacity onPress={onDelete} style={styles.deleteBtn}>
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // TAREA DEL ALUMNO: Crear estilos usando Flexbox (Row) aquí
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 2,
  },

  cover: {
    width: 50,
    height: 50,    
    
  },
  info: {
    width: 200,
  },
});

export default SongItem;
