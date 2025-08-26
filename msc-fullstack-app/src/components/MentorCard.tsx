import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface MentorCardProps {
  avatar: string;
  fullName: string;
  title: string;
  company: string;
}

const MentorCard: React.FC<MentorCardProps> = ({ avatar, fullName, title, company }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <Text style={styles.name}>{fullName}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.company}>{company}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    margin: 8,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 14,
    color: '#666',
  },
  company: {
    fontSize: 12,
    color: '#999',
  },
});

export default MentorCard;