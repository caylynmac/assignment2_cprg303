import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CityTab from "./citytab";

type WelcomeProps = { username: string };
const Tab = createBottomTabNavigator();

const Welcome: React.FC<WelcomeProps> = ({ username }) => {
    
    return (

            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.welcomeText}>Welcome {username}!</Text>
                </View>
                <Tab.Navigator
                    screenOptions={{ headerShown: false }}>
                    <Tab.Screen name="Calgary">
                        {() => (
                            <CityTab
                                cityName="Calgary"
                                imageUrl="https://plus.unsplash.com/premium_photo-1673241100156-2e04fca1a4af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FsZ2FyeXxlbnwwfHwwfHx8MA%3D%3D"
                                cityInfo={[
                                    { id: 1, text: 'As of 2024, Calgary has a population of approximately 1.6 million people, making it the third-largest city in Canada.' },
                                    { id: 2, text: 'The city hosts the world-famous Calgary Stampede, a 10-day rodeo and festival held every July, often called The Greatest Outdoor Show on Earth.' },
                                    { id: 3, text: 'Calgary is a key center for Canada’s oil and gas industry, with many energy company headquarters located there.' },
                                    { id: 4, text: 'The city is about an hour\'s drive from Banff National Park and the Rocky Mountains, making it a gateway for outdoor adventures like hiking, skiing, and wildlife spotting.' },
                                ]}
                                cityLink="https://www.calgary.ca/home.html"
                            />
                        )}
                    </Tab.Screen>
                    <Tab.Screen name="Edmonton">
                        {() => (
                            <CityTab
                                cityName="Edmonton"
                                imageUrl="https://images.unsplash.com/photo-1596048546977-800cfcaa56bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWRtb250b258ZW58MHx8MHx8fDA%3D"
                                cityInfo= {[
                                        { id: 1, text: "As of 2024, Edmonton has a population of approximately 1.1 million people, making it the fifth-largest city in Canada." },
                                        { id: 2, text: "Edmonton is the capital of Alberta and serves as the political and administrative center of the province." },
                                        { id: 3, text: "Edmonton is known as 'Festival City' due to its year-round festivals, including the Edmonton Folk Music Festival and the Fringe Theatre Festival." },
                                        { id: 4, text: "Home to West Edmonton Mall, one of the largest shopping malls in North America, featuring an indoor water park, amusement park, and over 800 stores." }
                                      ]}
                                  
                                cityLink="https://www.edmonton.ca/"
                            />
                        )}
                    </Tab.Screen>
                </Tab.Navigator>
            </View>

    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '100%',
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Welcome;