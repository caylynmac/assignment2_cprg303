import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Signin from '../components/signin';
import Welcome from '../components/welcome';

export default function App() {
    //global state variables
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");

  return (
    /* display welcome message if already logged in */
    <View style={styles.container}>
        {isLoggedIn ? (
            <Welcome username={username}/>
        ) : (
            <Signin
                setIsLoggedIn={setIsLoggedIn}
                setUsername={setUsername}
                username={username}/>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
