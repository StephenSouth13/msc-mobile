import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export interface CourseCardProps {
  thumbnail: string;
  category: string;
  title: string;
  description: string;
  mentorAvatars: string[];
}

export default function CourseCard({
  thumbnail,
  category,
  title,
  description,
  mentorAvatars,
}: CourseCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
      <View style={styles.badge}>
        <Text style={styles.category}>{category}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.avatars}>
        {mentorAvatars.map((avatar, index) => (
          <Image key={index} source={{ uri: avatar }} style={styles.avatar} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  thumbnail: {
    width: "100%",
    height: 120,
    borderRadius: 12,
    marginBottom: 8,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#e0e7ff",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginBottom: 4,
  },
  category: {
    fontSize: 12,
    color: "#3b82f6",
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 4,
    color: "#222",
  },
  description: {
    fontSize: 14,
    color: "#444",
    marginBottom: 8,
  },
  avatars: {
    flexDirection: "row",
    marginTop: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 6,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
});
