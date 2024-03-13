import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { toast } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!query.trim()) {
      toast.error("Can't be empty!");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='search'
        required
        type='text'
        autoComplete='off'
        autoFocus
        placeholder='Search images and photos'
        onChange={handleChange}
        value={query}
      />
      <button type='submit'>
        <IoIosSearch size='16px' />
      </button>
    </form>
  );
};

export default SearchBar;
