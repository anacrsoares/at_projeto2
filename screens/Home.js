import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  useWindowDimensions,
  FlatList,
  RefreshControl,
  ScrollView,
} from "react-native";
import { fetchImages } from "../api/NasaApi";
import AstroForm from "../components/AstroForm";
import Gallery from "../components/Gallery";
import * as Progress from "react-native-progress";

const ITEMS_PER_PAGE = 20;

const Home = ({ navigation }) => {
  const [astro, setAstro] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  // Obtém as dimensões da janela
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  console.log("Width:", width, "Height:", height);

  // Carregar imagens com base no astro selecionado
  const loadImages = async (
    astroName,
    pageToLoad = 1,
    isRefreshing = false
  ) => {
    try {
      if (loading && !isRefreshing) return;
      setLoading(true);

      const fetchedImages = await fetchImages(astroName, pageToLoad);

      if (fetchedImages.length > 0) {
        setTotalItems(pageToLoad * ITEMS_PER_PAGE);
        setImages((prevImages) =>
          isRefreshing ? fetchedImages : [...prevImages, ...fetchedImages]
        );
      } else {
        console.warn("No images fetched");
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
      if (isRefreshing) setRefreshing(false);
    }
  };

  useEffect(() => {
    loadImages(astro);
  }, [astro, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setPage(1);
    loadImages(astro, 1, true);
  };

  // Navegar para detalhes
  const handleCardPress = (image) => {
    navigation.navigate("ImageDetails", { image, isLandscape });
  };

  // Barra de carregamento
  const progressPercentage = totalItems > 0 ? images.length / totalItems : 0;

  // Botão Seacrh
  const handleSearch = (astroName) => {
    setImages([]); // Limpa a galeria atual
    setAstro(astroName); // Atualiza o astro
    loadImages(astroName); // Carrega as novas imagens
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NASA Gallery</Text>
      <AstroForm onSearch={(astroName) => handleSearch(astroName)} />
      <Progress.Bar
        progress={progressPercentage}
        width={null}
        height={10}
        color="#0000ff"
        unfilledColor="#e0e0e0"
        borderWidth={0}
        style={styles.progressBar}
      />

      {images.length === 0 && !loading && (
        <Text style={styles.emptyMessage}>No images to display</Text>
      )}

      <>
        <Gallery
          images={images}
          onCardPress={handleCardPress}
          onEndReached={handleLoadMore}
          onRefresh={handleRefresh}
          refreshing={refreshing}
          loading={loading}
        />
      </>
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
  progressBar: {
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
});
