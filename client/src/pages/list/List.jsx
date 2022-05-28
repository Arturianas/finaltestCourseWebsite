import React from 'react'
import SearchItem from '../../components/searchItem/SearchItem'
import './list.css'

const List = () => {
  return (
    <div className='list'>
      <h2>Design Courses</h2>
      <h3>Courses to get you started</h3>
      <div className="searchItems">
        <div className="listResult">
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
        </div>
      </div>
      
    </div>
  )
}

export default List