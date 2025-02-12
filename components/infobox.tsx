import React from 'react';
import { blue } from 'react-native-reanimated/lib/typescript/Colors';
import { View, Text, StyleSheet } from 'react-native';

interface InfoBoxProps {
    items: { id: number; text: string }[];
}

const InfoBox: React.FC<InfoBoxProps> = ({ items }) => {
    return (
        <View>
            {items.map(item => (
                <View
                    style={styles.box}
                    key={item.id}
                >
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            ))}
        </View>
    );
};
const styles = StyleSheet.create({
    box: {
        backgroundColor: '#7ba1ff',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },

    text: {
        color: '#fff',
    }
});

export default InfoBox;