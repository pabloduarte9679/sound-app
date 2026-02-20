// src/screens/PlaylistScreen.js
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, SafeAreaView ,Text, TextInput, Button} from 'react-native';
import { SONGS } from '../data/mockData';
import SongItem from '../components/SongItem';

const ListSeparatorComponent = () => (
  <View style={styles.separator} />
);

const ListEmptyComponent = () => (
  <Text style={styles.emptyText}>No hay música en el sistema</Text>
);

const PlayListScreen = () => {
  const [playlist, setPlaylist] = useState(SONGS);
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  const deleteSong = (id) => {
    setPlaylist(currentSongs => currentSongs.filter(song => song.id !== id));
  }

  const renderSong = ({ item }) => (
    <SongItem
      title={item.title}
      artist={item.artist}
      cover={item.cover}
      onDelete={() => deleteSong(item.id)}
    />
  );
 
  const addSong = () => {
    if(!title || !artist){
      return;
    }

    const newSong = {
      id: Date.now().toString(),
      title,
      artist,
      cover: `https://picsum.photos/${Math.floor(Math.random() * 300)}`
    };

    setPlaylist(currentSongs => [newSong, ...currentSongs]);
    setTitle('');
    setArtist('');
  }
 
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <TextInput
          style={styles.textInput}
          onChangeText={setTitle}
          value={title}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={setArtist}
          value={artist}
        />
        <Button title='Add song' onPress={addSong}/>
      </View>

      <FlatList
        data={playlist}
        renderItem={renderSong}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <ListSeparatorComponent />}
        ListEmptyComponent={<ListEmptyComponent />}
      />
    </SafeAreaView>
  );
};

export default PlayListScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
  },
  textInput: {
    margin: 5,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 2,
    width: 100,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
});
