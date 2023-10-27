export function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) => {
    return restaurant?.info?.name
      ?.toLowerCase()
      ?.includes(searchText.toLowerCase());

    // restraunts ke upar filter lagaya
    //it will search in each restraunt(card) jokin yaha pr restraunt se represented hai
    //we are returning only that restraunt card jiske info ke andar name ke andar include  ho searchText
    // where searchText is the input provided by the user
  });

  return filteredData;
}
