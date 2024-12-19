import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  View,
  useWindowDimensions,
} from "react-native";

const ImageDetails = ({ route }) => {
  const { image } = route.params;
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Image
          source={{ uri: image.imageUrl }}
          style={[styles.image, isLandscape && styles.imageLandscape]}
        />
        <Text style={[styles.title, isLandscape && styles.titleLandscape]}>
          {image.title}
        </Text>
        <Text
          style={[styles.subtitle, isLandscape && styles.subtitleLandscape]}
        >
          {image.date_created}
        </Text>
        <Text
          style={[
            styles.description,
            isLandscape && styles.descriptionLandscape,
          ]}
        >
          {image.description}
        </Text>
        <Text style={[styles.authors, isLandscape && styles.authorsLandscape]}>
          Secondary creators: {image.secondary_creator}
        </Text>
      </View>
    </ScrollView>
  );
};

export default ImageDetails;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 40,
    backgroundColor: "#fff",
  },
  content: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 8,
    marginBottom: 20,
  },
  imageLandscape: {
    width: "40%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  titleLandscape: {
    fontSize: 20,
    textAlign: "left",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  subtitleLandscape: {
    fontSize: 14,
    textAlign: "left",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
  },
  descriptionLandscape: {
    fontSize: 14,
    textAlign: "left",
  },
  authors: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
    color: "#666",
  },
  authorsLandscape: {
    fontSize: 12,
    textAlign: "left",
    marginTop: 5,
  },
});
