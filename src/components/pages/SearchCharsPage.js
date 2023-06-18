
import "./SearchCharsPage.scss"

const SearchCharsPage = () => {
    
    return (
        <div className="search_wrapper">
            <input type="text" className="search_input" placeholder="Type name of required character..."/>
            <p className="search_result-text">Result:</p>
            <hr />
            <div className="searh_result"></div>
        </div>
    )
}

export default SearchCharsPage;