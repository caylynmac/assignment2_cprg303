import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import credentials from "../credentials.json";
import { Link, useRouter } from "expo-router";

type SigninProps = {
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    username: string;
    setUsername: (username: string) => void;
  };

  const Signin: React.FC<SigninProps> = ({
    setIsLoggedIn,
    username,
    setUsername,
  }) => {
    const [password, setPassword] = useState<string>("");

    //check username/password are at least 5/8 characters long
    // useEffect(() => {
    //     if (username.length < 5) {
    //         alert("Username must be be at least 5 characters long.");
    //         return;
    //     }
    // }, [username]);

    // useEffect(() => {
    //     if (password.length < 8) {
    //         alert("Password must be be at least 5 characters long.");
    //         return;
    //     }
    // }, [password]);

    const handleSignIn = () => {
        if (username.length < 5) {
            alert("Username must be be at least 5 characters long.");
            return;
        }
        if (password.length < 8) {
            alert("Password must be be at least 8 characters long.");
            return;
        }
        // check password includes at least one uppercase letter, one lowercase letter, one number, and one special character.
        if (!/(?=.*[a-z])/.test(password)) {
            alert("Password must include at least one lowercase letter, uppercase letter, number, and special character each.");
            return;
        }

        //checks if user exists in credentials
        const user = credentials.users.find((user) => user.username === username && user.password === password);
        if (user) {
            setIsLoggedIn(true);
        } else {
            alert("Invalid username or password.");
        }
    };
    
    return(
        <View style={styles.container}>
            <TextInput
                placeholder="Username"
                onChangeText={setUsername}
                value={username}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                style={styles.input}
            />
            <Button title="Sign In" onPress={handleSignIn} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    heading: { fontSize: 24, marginBottom: 24 },
    text: { fontSize: 16, marginBottom: 16 },
        button: { padding: 16, backgroundColor: "blue", color: "white" },
        input: { padding: 16, marginBottom: 16, backgroundColor: "#f9f9f9", width: 200, borderColor: "black", borderWidth: 1 },
});

export default Signin;
