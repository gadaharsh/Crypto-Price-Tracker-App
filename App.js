import React, { useCallback, useMemo, useRef } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import ListItem from "./components/ListItem";
import { SAMPLE_DATA } from "./assets/data/sampleData";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const ListHeader = () => (
  <>
    <View style={styles.titleWrap}>
      <Text style={styles.mainTitle}>Markets</Text>
    </View>
    <View style={styles.divider} />
  </>
);

export default function App() {

  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["50%"], []);

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.container}>

        <FlatList
          keyExtractor={(item) => item.id}
          data={SAMPLE_DATA}
          renderItem={({ item }) => (
            <ListItem
              name={item.name}
              symbol={item.symbol}
              currentPrice={item.current_price}
              priceChangePrecentage7d={
                item.price_change_percentage_7d_in_currency
              }
              logoUrl={item.image}
            />
          )}
          ListHeaderComponent={<ListHeader />}
        />
      </SafeAreaView>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
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
    marginTop: 60,
    paddingHorizontal: 16,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#A9ABB1",
    marginHorizontal: 16,
    marginTop: 16,
  },
});
