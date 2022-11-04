import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const WikiSearch = ({ search, onChangeSearch, handleSearch }) => {
  return (
    <form className="search-box" onSubmit={handleSearch}>
      <div className="input-group-prepend">
        <span className="input-group-text">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
      <input
        type="search"
        placeholder="Search in Wikipedia"
        value={search}
        onChange={onChangeSearch}
      />
    </form>
  );
};

export default WikiSearch;
