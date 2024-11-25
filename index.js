let myAPIKey = "http://www.omdbapi.com/";
document.title = "Movies";

const fetchData = async (searchTerm) => {
  const response = await axios.get(myAPIKey, {
    params: {
      apikey: "93ae98ca",
      s: searchTerm,
    },
  });
};

const input = document.querySelector("input");

const debounce = (func, delay = 1000) => {
  let timeOutId;
  return (...args) => {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const onInput = (event) => {
  fetchData(event.target.value);
};
input.addEventListener("input", debounce(onInput, 500));
