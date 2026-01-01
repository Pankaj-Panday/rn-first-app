import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

export default function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const meal = itemData.item;
    const mealItemProp = {
      id: meal.id,
      title: meal.title,
      imageUrl: meal.imageUrl,
      complexity: meal.complexity,
      affordability: meal.affordability,
      duration: meal.duration,
    };
    return <MealItem {...mealItemProp} />;
  }

  return (
    <View>
      <FlatList data={displayedMeals} keyExtractor={(meal) => meal.id} renderItem={renderMealItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
