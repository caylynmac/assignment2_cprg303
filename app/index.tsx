import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import SignIn from '../components/signin';

export default function App() {
    //global state variables
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");

  return (
    <View style={styles.container}>
        {isLoggedIn ? (
            <Text>Welcome, {username}!</Text>
        ) : (
            <SignIn
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
