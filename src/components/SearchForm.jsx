function SearchForm() {
    return (
        <form className="search-form">
            <select>
                <option>Select Location</option>
                <option>Dar es salaam</option>
                <option>Mbeya</option>
                <option>Njombe</option>
                <option>Kagera</option>
                <option>Tabora</option>
                <option>Dodoma</option>
            </select>

            <select>
                <option>Select Speciality</option>
                <option>Real Estate</option>
                <option>Healthcare</option>
                <option>Education</option>
                <option>Technology</option>
                <option>Finance</option>
                <option>Marketing</option>
            </select>

            <button className="btn primary" type="submit">Search</button>
        </form>
    );
}
export default SearchForm;
