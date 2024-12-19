import { StyleSheet, FlatList, RefreshControl } from "react-native";
import GalleryCard from "../components/GalleryCard";

const Gallery = ({
  images,
  onCardPress,
  onEndReached,
  onRefresh,
  refreshing,
}) => {
  return (
    <FlatList
      data={images}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={({ item }) => (
        <GalleryCard image={item} onPress={() => onCardPress(item)} />
      )}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentContainerStyle={styles.container}
    />
  );
};

export default Gallery;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  progressBar: {
    marginVertical: 10,
  },
  progressText: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
  },
});
