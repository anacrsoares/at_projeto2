import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

const useOrientation = () => {
  // Estado para armazenar a orientação
  const [isLandscape, setIsLandscape] = useState(false);

  // Detecta mudanças na orientação do dispositivo
  useEffect(() => {
    const handleOrientationChange = () => {
      const { width, height } = Dimensions.get("window");
      setIsLandscape(width > height);
    };

    // Adiciona listener de mudança de dimensão
    Dimensions.addEventListener("change", handleOrientationChange);
  }, []);

  return isLandscape;
};

export default useOrientation;
