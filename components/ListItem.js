import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const ListItem = ({
  name,
  symbol,
  currentPrice,
  priceChangePrecentage7d,
  logoUrl,
}) => {

  const priceChangeColor = priceChangePrecentage7d > 0 ? '#34C759' : '#FF3B30';
  
  return (
    <TouchableOpacity>
      <View style={styles.itemWrap}>
        {/* Left */}
        <View style={styles.itemLeftWrap}>
          <Image
            source={{
              uri: logoUrl,
            }}
            style={styles.image}
          />
          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
          </View>
        </View>
        {/* Right */}
        <View style={styles.itemRightWrap}>
          <View style={[styles.titlesWrapper, { alignItems: "flex-end" }]}>
            <Text style={styles.title}>
              $ 
{currentPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </Text>
            <Text style={[styles.subtitle, { color: priceChangeColor }]}>
              {priceChangePrecentage7d.toFixed(2)} %
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  itemWrap: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    height: 48,
    width: 48,
  },
  itemLeftWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemRightWrap: {
    alignItems: "flex-end",
  },
  titlesWrapper: {
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 14,
    color: "#A9ABB1",
    marginTop: 4,
  },
});
