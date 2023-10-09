import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { View, TextInput, FlatList, Text } from 'react-native';

function Appbar() {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const data = [
    'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grapes', 'Honeydew',
  ];

  const handleSearch = (text) => {
    const filteredData = data.filter(item =>
      item.toLowerCase().includes(text.toLowerCase())
    );
    setSearchText(text);
    setSearchResults(filteredData);
  };

  return (
    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
      <Ionicons name='calendar-outline' size={24} color='black' style={{ margin: "0", marginTop: "auto", marginBottom: "auto" }} /> {/* Use Ionicons directly */}
      <View style={{ width: "50px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "10px" }}>
        <Ionicons name='search' size={24} color='black' style={{ margin: "auto" }} /> {/* Use Ionicons directly */}
        <TextInput
          style={{
            height: 30,
            borderColor: 'gray',
            borderWidth: 1,
            paddingLeft: 8,
          }}
          placeholder="Search..."
          value={searchText}
          onChangeText={handleSearch}
        />

        <FlatList
          data={searchResults}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Text>{item}</Text>
          )}
        />
      </View>
      <Ionicons name='md-paper-plane' size={24} color='black' style={{ margin: "0", marginTop: "auto", marginBottom: "auto" }} /> {/* Use Ionicons directly */}

    </View>
    
  );
}

export default Appbar;
