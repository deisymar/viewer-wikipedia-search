import axios from "axios";
import { useState } from "react";

import WikiSearch from "./components/WikiSearch";
import WikiRandom from "./components/WikiRandom";
import WikiResult from "./components/WikiResult";
import "./styles.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});
  const [isRandom, setIsRandom] = useState(false);

  const getDataRandom = async () => {
    try {
      let response = await axios.get(
        "https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=10&origin=*"
      );
      setSearchInfo({ totalhits: 10 });
      setIsRandom(true);
      setResults(response.data.query.random);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async (term) => {
    const trimTerm = term.trim().toLowerCase();
    if (trimTerm.length > 0) {
      try {
        const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${trimTerm}`;
        const response = await axios.get(apiUrl);
        setResults(response.data.query.search);
        setSearchInfo(response.data.query.searchinfo);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search === "") return;
    getData(search);
  };

  const onChangeSearch = (e) => {
    setIsRandom(false);
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1>
          <img
            src="../image/wikipedia-logo.png"
            width="40"
            alt="logo-wikipedia"
          />
          <span> Wikipedia Search</span>
        </h1>
        <WikiSearch
          search={search}
          onChangeSearch={onChangeSearch}
          handleSearch={handleSearch}
        />
        <h2 className="text-or">OR</h2>
        <WikiRandom results={results} getDataRandom={getDataRandom} />
        {searchInfo.totalhits ? (
          <p className="text-search-info">
            Search Results: {searchInfo.totalhits}{" "}
          </p>
        ) : (
          ""
        )}
      </header>
      <WikiResult results={results} isRandom={isRandom} />
    </div>
  );
}
