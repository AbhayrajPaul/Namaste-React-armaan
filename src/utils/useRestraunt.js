import { useEffect, useState } from "react";

const useRestraunt = (id) => {
  const [restrauntInfo, setRestrautInfo] = useState(null);
  const [restrauntItems, setRestrauntItems] = useState(null);
  const [restrauntOffers, setRestrauntOffers] = useState(null);
  useEffect(() => {
    getRestrauntMenu();
  }, []);
  async function getRestrauntMenu() {
    const menu = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.390357109608406&lng=76.75831396132708&restaurantId=${id}`
    );
    const json = await menu.json();
    // console.log(json);
    setRestrautInfo(json.data?.cards[0]?.card?.card?.info);
    setRestrauntItems(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
        (c) =>
          c.card.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
    // console.log(
    //   json?.data.cards[1].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    //     .itemCards
    // );
    setRestrauntOffers(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
  }
  return { restrauntInfo, restrauntItems, restrauntOffers };
};

export default useRestraunt;
