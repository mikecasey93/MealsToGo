import React, { useContext } from "react";
import { FavoritesContext } from "../../../services/favorites/favorites-context";
import { SafeArea } from "../../../components/utility/safe-area-component";
import { Text } from "../../../components/typography/text-component";
import styled from "styled-components/native";
import { RestaurantList } from "../../restaurants/components/restaurant-list-styles";
import { TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/spacer/spacer-component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurants-info-card-components";

const NoFavoritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);
  return favorites.length ? (
    <SafeArea>
      <RestaurantList
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavoritesArea>
      <Text center>No favorites yet</Text>
    </NoFavoritesArea>
  );
};
