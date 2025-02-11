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
    useEffect(() => {
        if (username.length < 5) {
            alert("Username must be be at least 5 characters long.");
            return;
        }
    }, [username]);

    useEffect(() => {
        if (password.length < 8) {
            alert("Password must be be at least 5 characters long.");
            return;
        }
    }, [password]);

    const handleSignIn = () => {
        // check password includes at least one uppercase letter, one lowercase letter, one number, and one special character.
        if (!/(?=.*[a-z])/.test(password)) {
            alert("Password must include at least one lowercase letter, uppercase letter, number, and special character each.");
            return;
        }

        //add stuff to check if user exists in credentials
    };
    return(
        <View>
            <TextInput
                placeholder="Username"
                onChangeText={setUsername}
                value={username}
            />
            <TextInput
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
            />
            <Button title="Sign In" onPress={handleSignIn} />
        </View>
    )
};

export default Signin;
