import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ProjectCard from '../components/ProjectCard';
import Header from '../components/Header';

const ProjectsScreen: React.FC = () => {
  const projects = [
    {
      id: '1',
      title: 'Project One',
      description: 'Description of Project One',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      title: 'Project Two',
      description: 'Description of Project Two',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '3',
      title: 'Project Three',
      description: 'Description of Project Three',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <View style={styles.container}>
      <Header title="Projects" />
      <FlatList
        data={projects}
        renderItem={({ item }) => (
          <ProjectCard
            title={item.title}
            description={item.description}
            image={item.image}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding: 16,
  },
});

export default ProjectsScreen;