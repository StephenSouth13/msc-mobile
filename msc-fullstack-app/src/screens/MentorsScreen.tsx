import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MentorCard from '../components/MentorCard';

const mentorsData = [
  {
    id: '1',
    name: 'John Doe',
    title: 'Senior Developer',
    company: 'Tech Solutions',
    avatar: 'https://example.com/avatar1.png',
  },
  {
    id: '2',
    name: 'Jane Smith',
    title: 'Project Manager',
    company: 'Innovate Inc.',
    avatar: 'https://example.com/avatar2.png',
  },
  {
    id: '3',
    name: 'Alice Johnson',
    title: 'UX Designer',
    company: 'Creative Co.',
    avatar: 'https://example.com/avatar3.png',
  },
  // Add more mentor data as needed
];

const MentorsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Mentors</Text>
      <FlatList
        data={mentorsData}
        renderItem={({ item }) => (
          <MentorCard
            avatar={item.avatar}
            name={item.name}
            title={item.title}
            company={item.company}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  list: {
    justifyContent: 'space-between',
  },
});

export default MentorsScreen;