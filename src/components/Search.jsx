import React, { useState } from 'react';

const Search = ({search, setSearch}) => {

    return (
        <div>
            <input class="form-control me-2" type="search" placeholder='Введите название' autoComplete='off' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
    );
};

export default Search;