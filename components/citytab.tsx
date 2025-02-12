import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import InfoBox from './infobox';

type CityTabProps = {
    cityName: string;
    imageUrl: string;
    cityInfo: {id: number, text: string}[];
    cityLink: string;
};

const CityTab: React.FC<CityTabProps> = ({ cityName, imageUrl, cityInfo, cityLink }) => {
    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
            <Text style={styles.cityName}>{cityName}</Text>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <InfoBox items={cityInfo} />
            <TouchableOpacity onPress={() => Linking.openURL(cityLink)} style={styles.button}>
                <Text style={styles.buttonText}>Go to city page</Text>
            </TouchableOpacity>
        </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'space-around', padding: 10 },
    cityName: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    image: { width: 300, height: 200, borderRadius: 10, marginBottom: 10 },
    info: { fontSize: 16, textAlign: 'center', marginBottom: 10, padding: 10 },
    button: { backgroundColor: '#3e72fb', padding: 10, borderRadius: 5 },
    buttonText: { color: '#fff', fontSize: 16 },
});

export default CityTab;