import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const ImageDetails = ({ route }) => {
  const { image } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: image.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{image.title}</Text>
      <Text style={styles.subtitle}>{image.date_created}</Text>
      <Text style={styles.description}>{image.description}</Text>
      <Text style={styles.authors}>
        Secondary creators: {image.secondary_creator}
      </Text>
    </ScrollView>
  );
};

export default ImageDetails;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
  },
  authors: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
    color: "#666",
  },
});
