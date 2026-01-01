import { useNavigation } from "@react-navigation/native";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetailsCard from "./MealDetailsCard";

export default function MealItem({ id, title, imageUrl, complexity, duration, affordability }) {
  const navigation = useNavigation();



  return (
    <View style={styles.mealItem}>
      <Pressable style={({ pressed }) => [pressed ? styles.pressed : null]} onPress={() => {
        navigation.navigate('MealDetails', {
          mealId: id
        })
      }}>
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetailsCard complexity={complexity} affordability={affordability} duration={duration} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
  },
  pressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    margin: 12,
  },
  
});
