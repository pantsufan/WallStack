import React from 'react';
function Search({handleInput, search}) {
  return (
    <section>
      <div className="md-form text-center">
        <input onChange={handleInput} onKeyPress={search}
        className="p-3 bar"
        type="text" 
        placeholder="Enter Search Term" aria-label="Search"/>
      </div>
    </section>
  )
}
export default Search