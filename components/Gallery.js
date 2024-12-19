// components/Gallery.jsx
import React from "react";
import {
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Gallery = ({ images, onCardPress }) => {
  return (
    <ScrollView contentContainerStyle={styles.gallery}>
      {images.map((image) => (
        <TouchableOpacity
          key={image.id}
          onPress={() => onCardPress(image)}
          style={styles.card}
        >
          <Image source={{ uri: image.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{image.title}</Text>
          <Text style={styles.title}>{image.date_created}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gallery: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  title: {
    marginTop: 5,
    fontSize: 14,
    textAlign: "center",
  },
});

export default Gallery;
