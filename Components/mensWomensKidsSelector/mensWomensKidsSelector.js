import React from 'react';
import styled from 'styled-components'
import { useDispatch} from 'react-redux'

export const Options = () => {

    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch({
            type: 'sneaker/selectMensWomensKids',
            payload: e.target.value
        });
    }

    return(
        <DropDown onChange={handleChange}>
            <Item value="reset">All Results</Item>
            <Item value="mensFlag">Mens</Item>
            <Item value="womensFlag">Womens</Item>
            <Item value="kidsFlag">Kids</Item>
        </DropDown>
    )
}

const DropDown = styled.select`
margin-top: 20px;
width: 80%;
height: 30px;

`

const Item = styled.option`

`