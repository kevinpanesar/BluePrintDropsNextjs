import { React, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { set } from "date-fns";

export const Options = () => {
    const dispatch = useDispatch();
    const [allSelected, setAllSelected] = useState(true);
    const [mensSelected, setMensSelected] = useState(false);
    const [womensSelected, setWomensSelected] = useState(false);
    const [kidsSelected, setKidsSelected] = useState(false);

    const handleChange = (e) => {
        dispatch({
            type: "sneaker/selectMensWomensKids",
            payload: e.target.value,
        });

        if (e.target.value === 'reset') {
            setAllSelected(true);
            setMensSelected(false);
            setWomensSelected(false);
            setKidsSelected(false);
        }
        else if (e.target.value === 'mensFlag') {
            setAllSelected(false);
            setMensSelected(true);
            setWomensSelected(false);
            setKidsSelected(false);
        } else if (e.target.value === 'womensFlag') {
            setAllSelected(false);
            setMensSelected(false);
            setWomensSelected(true);
            setKidsSelected(false);
        } else if (e.target.value === 'kidsFlag') {
            setAllSelected(false);
            setMensSelected(false);
            setWomensSelected(false);
            setKidsSelected(true);
        }
    };

    return (
        <Container>
            <Item onClick={handleChange} value="reset" selected={allSelected}>
                All
            </Item>
            <Item value="mensFlag" onClick={handleChange} selected={mensSelected}>
                Mens
            </Item>
            <Item onClick={handleChange} value="womensFlag" selected={womensSelected}>
                Womens
            </Item>
            <Item onClick={handleChange} value="kidsFlag" selected={kidsSelected}>
                Kids
            </Item>
        </Container>
    );
};

const Container = styled.div`
  width: 80%;
  height: 40px;
  margin: 20px auto 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 4px 0px;
  border: 2px solid #C0C0C0;
  border-radius: 10px;
  background-color: white;
`;

const Item = styled.button`
  width: 23%;
  background-color: ${props => props.selected ? '#21587f' : 'white'};
  color: ${props => props.selected ? 'white' : 'black'};
  border-radius: 10px;
  border: none;
  box-shadow: ${props => props.selected ? 'inset 0.640128px 0.640128px 7.68154px 6.40128px rgba(0, 0, 0, 0.25)' : null};
`;
