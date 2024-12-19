import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import { fetchImages } from "../api/NasaApi";
import AstroForm from "../components/AstroForm";
import Gallery from "../components/Gallery";

const Home = ({ navigation }) => {
  const [astro, setAstro] = useState("earth");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  //   const [isLandscape, setIsLandscape] = useState(false);

  // Obtém as dimensões da janela
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  console.log("Width:", width, "Height:", height);

  // Carregar imagens com base no astro selecionado
  const loadImages = async (astroName) => {
    setLoading(true);
    const fetchedImages = await fetchImages(astroName);
    setImages(fetchedImages);
    setLoading(false);
  };

  useEffect(() => {
    loadImages(astro);
  }, [astro]);

  // Navegar para a página de detalhes
  const handleCardPress = (image) => {
    navigation.navigate("ImageDetails", { image });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NASA Gallery</Text>
      <Text>{isLandscape ? "Landscape" : "Portrait"}</Text>
      <AstroForm onSelect={setAstro} />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Gallery images={images} onCardPress={handleCardPress} />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
});
