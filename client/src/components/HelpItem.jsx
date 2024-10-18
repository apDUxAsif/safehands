import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ImagePaths } from "../../src/constants/ImagePaths";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
const HelpItem = () => {
  const helpOptions = [
    { icon: "car", title: "Add Vehicle" },
    { icon: "car", title: "Check Challan" },
    { icon: "car", title: "Find Medical Expenses" },
    { icon: "car", title: "Check Data Breach" },
    { icon: "car", title: "Diabetes Reversal" },
    { icon: "car", title: "Pre-Diabetes risk" },
    { icon: "car", title: "OPD Centre" },
    { icon: "car", title: "View All" },
  ];
  const renderHelpItem = ({ item, index }) => (
    <View key={index} style={styles.helpItem}>
      <Icon style={styles.icon} name={item.icon} size={24} color="#000" />
      <Text style={styles.helpText}>{item.title}</Text>
    </View>
  );
  return (
    <View style={styles.contentContainer}>
      <FlatList
        scrollEnabled={false}
        data={helpOptions}
        renderItem={renderHelpItem}
        keyExtractor={(item) => item.title}
        numColumns={4}
        style={styles.flatList}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

export default HelpItem;

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: colors.background,
  },
  flatList: {
    paddingVertical: verticalScale(20),
    // backgroundColor: "green",
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  helpItem: {
    // justifyContent: "center",
    alignItems: "center",
    width: scale(60),
    // height: 120,
    // backgroundColor: "red",
    paddingBottom: scale(15),
  },
  icon: {
    padding: moderateScale(15),
    backgroundColor: colors.tarnary,
    borderRadius: 10,
  },
  helpText: {
    marginTop: verticalScale(5),
    fontSize: 12,
    textAlign: "center",
    fontWeight: "700",
    color: "#646567",
  },
});
