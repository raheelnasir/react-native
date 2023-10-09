import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Navbar from './Containers/Navbar';
import Appbar from './Containers/Appbar';
import { DataContext } from './Containers/DataContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: "hidden"
  },
});

export default function App() {
  return (
    <DataContext>
      <View style={styles.container}>
        <Appbar />
        <Navbar />

      </View>
    </DataContext>
  );
}
