import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const AstroForm = ({ onSearch }) => {
  const [astro, setAstro] = useState(null);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter astro name (e.g., moon)"
        value={astro}
        onChangeText={setAstro}
      />
      <Button
        title="Search"
        style={styles.button}
        onPress={() => onSearch(astro)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

export default AstroForm;
