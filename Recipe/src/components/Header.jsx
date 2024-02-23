import { useState } from 'react';
import PhotoFood from '../assets/d6f347a1f784262e7c180e15c852f1a5_w750_h750.jpg';

function Header ({handleSearch}) {

  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = () => {
    handleSearch(searchTerm);
    setSearchTerm("")
  }

    return (
        <header className="main_header">
          <div className="text-container">
            <h1 className="header-title">
            Look for <span>Banger</span> Food
            </h1>
            <p className="header-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Porro nihil perspiciatis, 
              beatae voluptatem minus optio modi id eos reiciendis repellat. 
            </p>
            <div className="header-input-container">
              <input 
              type="text"
              placeholder='Find a recipe...' 
              onChange={(e) => setSearchTerm(e.target.value)} 
              value={searchTerm} 
              />
              <button onClick={handleClick}>Search</button>
            </div>
          </div>
          <div>
            <img src={PhotoFood}
            alt="food" className='main_img' />
          </div>
        </header> 
    )
}

export default Header;