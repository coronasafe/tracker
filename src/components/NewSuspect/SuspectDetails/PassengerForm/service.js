const countries = ["UK", "US", "Indonesia", "Kuwait", "UAE"];
export function getCountryOptions(searchText) { //TO BE REPLACED WITH A PROPER FUNCTION
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(countries);
    }, 1000);
  });
}
