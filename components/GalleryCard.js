import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";

const GalleryCard = ({ image, onPress }) => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <View>
      <TouchableOpacity
        key={image.id}
        onPress={() => onPress(image)}
        style={styles.card}
      >
        <Image
          source={{ uri: image.imageUrl }}
          style={[styles.image, isLandscape && styles.imageLandscape]}
        />
        <Text style={styles.title}>{image.title}</Text>
        <Text style={styles.title}>{image.date_created}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GalleryCard;

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
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
  imageLandscape: {
    width: "30%",
    height: "30%",
  },
});
