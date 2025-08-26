import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import CourseCard from '../components/CourseCard';
import { Course } from '../types';

export default function CoursesScreen() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch('http://192.168.1.10:8080/courses')
      .then(res => res.json())
      .then(data => {
        setCourses(
          data.map((item: any) => ({
            ...item,
            thumbnail: item.thumbnail || 'https://via.placeholder.com/300',
            mentorAvatars: item.mentorAvatars || [
              'https://i.pravatar.cc/150?img=1',
              'https://i.pravatar.cc/150?img=2',
            ],
          }))
        );
      })
      .catch(() => setCourses([]));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Chương trình Đào tạo</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CourseCard {...item} />}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
  },
  list: {
    padding: 8,
  },
});