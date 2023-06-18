import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import SwipeCards from "react-native-swipe-cards-deck";
import { getNewsData } from '../api/newsCategoriesAPI';

function Card({ title, imageUrl }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.cardImage} />
      <Text>{title}</Text>
    </View>
  );
}

const extractTitleAndImage = (data) => {

  if (!data || !data['data']) {
    return { titles: [], imageUrls: [] };
  }

  // Extracting title and image URL
  const titles = data['data'].map((item) => item.title);
  const imageUrls = data['data'].map((item) => item.imageUrl);

  return { titles, imageUrls };
};



function StatusCard({ text }) {
  return (
    <View>
      <Text style={styles.cardsText}>{text}</Text>
    </View>
  );
}

export default function HomeScreen() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const data = await getNewsData();
        const { titles, imageUrls } = extractTitleAndImage(data);
        const cardsData = titles.map((title, index) => ({
          title: title,
          image: imageUrls[index],
        }));
        setCards(cardsData);
      } catch (error) {
        console.log('Error fetching news data:', error);
      }
    };
  
    fetchNewsData();
  }, []);
  
  function handleYup(card) {
    console.log(`Yup for ${card.title}`);
    return true;
  }
  
  function handleNope(card) {
    console.log(`Nope for ${card.title}`);
    return true;
  }
  
  function handleMaybe(card) {
    console.log(`Maybe for ${card.title}`);
    return true;
  }

  return (
    <View style={styles.container}>
      {cards.length > 0 ? (
        <SwipeCards
          cards={cards}
          renderCard={(card, index) => (
            <Card key={index} title={card.title} imageUrl={card.image} />
          )}
          keyExtractor={(cardData) => String(cardData.text)}
          renderNoMoreCards={() => <StatusCard text="No more cards..." />}
          actions={{
            nope: { onAction: handleNope },
            yup: { onAction: handleYup },
            maybe: { onAction: handleMaybe },
          }}
          hasMaybeAction={true}
          stack={true}
          stackDepth={3}
        />
      ) : (
        <StatusCard text="Loading..." />
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300,
  },
  cardImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  cardsText: {
    fontSize: 22,
  },
});
