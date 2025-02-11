import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CityTab from './components/CityTab';

type WelcomeProps = { username: string };

const Welcome: React.FC<WelcomeProps> = ({ username }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome {username}!</Text>
        </View>
    );
};

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <View style={{ flex: 1 }}>
                <Welcome username="User" />
                <Tab.Navigator>
                    <Tab.Screen name="Calgary">
                        {() => (
                            <CityTab
                                cityName="Calgary"
                                imageUrl="https://upload.wikimedia.org/wikipedia/commons/9/97/Calgary_Skyline_2020.jpg"
                                cityInfo="Calgary is known for its Stampede, oil industry, and stunning Rocky Mountain views."
                                cityLink="https://www.calgary.ca/home.html"
                            />
                        )}
                    </Tab.Screen>
                    <Tab.Screen name="Edmonton">
                        {() => (
                            <CityTab
                                cityName="Edmonton"
                                imageUrl="https://upload.wikimedia.org/wikipedia/commons/e/e3/Edmonton_Skyline_Summer_2020.jpg"
                                cityInfo="Edmonton is the capital of Alberta, famous for its river valley, festivals, and West Edmonton Mall."
                                cityLink="https://www.edmonton.ca/"
                            />
                        )}
                    </Tab.Screen>
                </Tab.Navigator>
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
