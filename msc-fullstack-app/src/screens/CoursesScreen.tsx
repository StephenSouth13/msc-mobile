import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, Text } from "react-native";
import CourseCard from "../components/CourseCard";
import { Course } from "../types";

export default function CoursesScreen() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch("http://192.168.1.10:8080/courses")
      .then((res) => res.json())
      .then(setCourses)
      .catch(() => setCourses([]));
  }, []);

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 24, fontWeight: "bold", margin: 16 }}>
        Chương trình Đào tạo
      </Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CourseCard
            thumbnail={item.thumbnail}
            category={item.category}
            title={item.title}
            description={item.description}
            mentorAvatars={item.mentorAvatars}
          />
        )}
      />
    </SafeAreaView>
  );
}
