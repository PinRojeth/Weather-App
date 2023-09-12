import SearchBtn from "../assets/search.svg";

function SearchLocation() {
//   const [search, setSearch] = useState(null);
//   const [data, setData] = useState("");
//   const apiKey = "8a070dbdc603fbe75754dc616a978f34";
//   const url = `https://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=${apiKey}`;

//   useEffect(() => {
//     const response = await axios
//       .get(url)
//       .then((response) => {
//         setData(response.json())
//       })
//       .then((response) => {
//         setData(response.data);
//       })

//       .catch((error) => {
//         console.error("Error fetching weather data : ", error);
//         setData(null);
//       });
//     console.log(data);
//   }),
//     [search];

  // const handleChange = (event) => {
  //   setSearch(event.target.value);
  // };
  return (
    <form className="search-form">
      <button className="search-btn">
        <img src={SearchBtn} alt="" />
      </button>
      <input
        type="text"
        placeholder="Enter the cities"
        className="search-input"

      />
    </form>
  );
}

export default SearchLocation;
