import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export type MentorCardProps = {
  avatar: string;
  name: string;
  title: string;
  company: string;
};

const MentorCard: React.FC<MentorCardProps> = ({ avatar, name, title, company }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.company}>{company}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },
  title: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
  company: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
  },
});

export default MentorCard;
