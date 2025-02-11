import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type WelcomeProps = {username: string};

const Welcome: React.FC<WelcomeProps> = ({username}) => {   
    return(
        <View style={styles.container}>
            <Text>Welcome {username}!</Text>
        </View>

        // still needs Calgary and Edmonton tabs
        // https://www.calgary.ca/home.html
        // https://www.edmonton.ca/
    );
};
    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Welcome;