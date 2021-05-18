import React, { useState } from 'react';
import Item from '../components/Item';
import Title from '../components/Title';
import SearchBar from '../components/SearchBar';
import useFetch from '../hooks/useFetch';

const MannageItems = (props) => {

    const [query, setQuery] = useState('');

    const url = query && `https://hn.algolia.com/api/v1/search?query=${query}`;

    const state= useFetch(url);

    return (
        <>
            <Title>Use of Hacker News Search API </Title>
            <SearchBar search={setQuery}/>
            {state.status==="fetching" && <div>Searching .....</div>}
            <div className="row no-gutters">
                {state.data.hits && state.data.hits.map(hit => {
                    return (
                        <Item key={hit.objectID} {...hit} />
                    )
                })}

            </div>
        </>
    )
};

export default MannageItems;