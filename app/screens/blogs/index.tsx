import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Link, useRouter } from "expo-router";

const blogs = [
  { id: "1", title: "Understanding React Native" },
  { id: "2", title: "A Guide to Expo Router" },
  { id: "3", title: "Best Practices for Mobile Development" },
];

const BlogsIndex = () => {
  const renderItem = ({ item }: { item: { id: string; title: string } }) => (
    <Link href={{
        pathname: '/screens/blogs/[id]',
        params: { id: '1' }
    }}>
        <Text style={styles.blogTitle}>{item.title}</Text>
    </Link>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Blogs</Text>
      <FlatList
        data={blogs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default BlogsIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  blogItem: {
    padding: 16,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  blogTitle: {
    fontSize: 18,
  },
});
