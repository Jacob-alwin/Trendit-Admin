import React from 'react'

function SearchBar() {
  return (
    <div class="search-area d-flex p-4">
    <input class="form-control me-3" placeholder="Search user" />
    <button class="btn btn-primary">Search</button>
</div>
  )
}

export default SearchBar