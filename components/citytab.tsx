import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

type CityTabProps = {
    cityName: string;
    imageUrl: string;
    cityInfo: string;
    cityLink: string;
};

const CityTab: React.FC<CityTabProps> = ({ cityName, imageUrl, cityInfo, cityLink }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.cityName}>{cityName}</Text>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.info}>{cityInfo}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(cityLink)} style={styles.button}>
                <Text style={styles.buttonText}>Go to city page</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
    cityName: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    image: { width: 300, height: 200, borderRadius: 10, marginBottom: 10 },
    info: { fontSize: 16, textAlign: 'center', marginBottom: 10 },
    button: { backgroundColor: '#007bff', padding: 10, borderRadius: 5 },
    buttonText: { color: '#fff', fontSize: 16 },
});

export default CityTab;