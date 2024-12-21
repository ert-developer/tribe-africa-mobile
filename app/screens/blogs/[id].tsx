import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

const BlogDetails = () => {
  const { id } = useLocalSearchParams();

  // For demonstration, we'll use a mock blog data object.
  const blogDetails = {
    title: "Blog Title Placeholder",
    content: "This is a placeholder for blog content. Replace this with fetched data.",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogDetails.title}</Text>
      <Text style={styles.content}>{blogDetails.content}</Text>
    </View>
  );
};

export default BlogDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
});
