import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';

export const SearchBar = () => {

    const dispatch = useDispatch()
    const term = useSelector((state) => state.sneaker.searchTerm);


    return (
        <form className="searchBar" onChange={(e) => {
            dispatch({ type: 'sneaker/setSearchTerm', payload: e.target.value })

        }}>
            <input type="search" placeholder="Search..." defaultValue={term}/>
        </form>
    );
}
