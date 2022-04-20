import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ListItem from "./components/ListItem";
import { SAMPLE_DATA } from "./assets/data/sampleData"; 



export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.titleWrap}>
        <Text style={styles.mainTitle}>Markets</Text>
      </View>
      <View style={styles.divider} />
      <ListItem 
      name = {SAMPLE_DATA[0].name}
      symbol = {SAMPLE_DATA[0].symbol}
      currentPrice = {SAMPLE_DATA[0].current_price}
      priceChangePrecentage7d = {SAMPLE_DATA[0].price_change_percentage_7d_in_currency}
      logoUrl = {SAMPLE_DATA[0].image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  titleWrap: {
    marginTop: 40,
    paddingHorizontal: 16,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#A9ABB1",
    marginHorizontal: 16,
    marginTop: 16,
  },
});
