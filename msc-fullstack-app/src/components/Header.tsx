import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header: React.FC<{ title: string }> = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#dee2e6',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Header;