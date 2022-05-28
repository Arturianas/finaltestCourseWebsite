import React from 'react'
import './searchItem.css'

const SearchItem = () => {
  return (
    <div className="fpItem">
        <img
          // src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Full-Stack Web Development</span>
        <span className="fpCity">Development</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
  )
}

export default SearchItem