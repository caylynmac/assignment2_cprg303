import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React, { useState } from "react";
import credentials from "../credentials.json";

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

    const handleSignIn = () => {
        if (username.length < 5) {
            alert("Username must be at least 5 characters long.");
            return;
        }
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }
        if (!/(?=.*[a-z])/.test(password)) {
            alert("Password must include at least one lowercase letter, uppercase letter, number, and special character.");
            return;
        }

        const user = credentials.users.find(
            (user) => user.username === username && user.password === password
        );
        if (user) {
            setIsLoggedIn(true);
        } else {
            alert("Invalid username or password.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Sign In</Text>
            <Text style={styles.subheading}>For testing use:</Text>
            <Text style={styles.credentials}>Username: janeSmith</Text>
            <Text style={styles.credentials}>Password: Secure!456</Text>
            
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
                secureTextEntry
            />
            
            <View style={styles.buttonContainer}>
                <Button title="Sign In" onPress={handleSignIn} color="#fff" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#f4f4f9",
        marginTop: 30,
    },
    heading: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5,
    },
    subheading: {
        fontSize: 18,
        color: "#555",
        marginBottom: 10,
    },
    credentials: {
        fontSize: 16,
        color: "#888",
        marginBottom: 12,
    },
    input: {
        width: 280,
        padding: 12,
        marginBottom: 16,
        backgroundColor: "#fff",
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 6,
        fontSize: 16,
        color: "#333",
        marginTop: 20,
    },
    buttonContainer: {
        width: 280,
        backgroundColor: "#007bff",
        borderRadius: 8,
        overflow: "hidden",
    },
});


export default Signin;