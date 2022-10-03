import React, { useState } from 'react'
import { Container, Box } from '@mui/material'
import styled from '@emotion/styled';
import ItemCount from '../ItemCount';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useCartContext } from '../../Context/CartContext';

const MySwal = withReactContent(Swal)

export const ItemDetail = ({ listproduct }) => {

  const { addItem } = useCartContext();
  const [enCarrito,setEnCarrito] = useState(false)

  const onAdd = (count) => {
    MySwal.fire({
      title: "Listo!",
      text: `Se agregan ${count} al carrito`,
    });
    addItem(listproduct,count);
    setEnCarrito(true)
    
  }


  return (
    <Container sx={{ padding: 5, display: "flex", textAlign: "center" }}>
      <Box sx={{ width: 600, height: 300 }}>
        <Image src={listproduct.imagen1} />
        <Image src={listproduct.imagen2} />
        <Image src={listproduct.imagen3} />
      </Box>
      <Box sx={{ flex: 1, padding: "0px 50px" }}>
        <Title>{listproduct.title}</Title>
        <Desc>
          {listproduct.description2}
        </Desc>
        <Price>Precio: ${listproduct.price}</Price>
        <FilterContainer>
          <Filter>
            <FilterTitle>Talle</FilterTitle>
            {listproduct.categoria === "Zapatillas" ?
              <FilterSize>
                <FilterSizeOption>38</FilterSizeOption>
                <FilterSizeOption>39</FilterSizeOption>
                <FilterSizeOption>40</FilterSizeOption>
                <FilterSizeOption>41</FilterSizeOption>
                <FilterSizeOption>42</FilterSizeOption>
                <FilterSizeOption>43</FilterSizeOption>
                <FilterSizeOption>44</FilterSizeOption>
                <FilterSizeOption>45</FilterSizeOption>
              </FilterSize> :
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            }
          </Filter>
        </FilterContainer>
        <Box sx={{ width: "50%", margin: "0 auto" }}>
          <ItemCount initial={1} stock={10} onAdd={onAdd} enCarrito={enCarrito} />
        </Box>

      </Box>
    </Container>
  )
}



const Image = styled.img`
  width: 40%;
  margin: 10px 5px;
`;


const Title = styled.h1`
  font-weight: 200;
  color: white;
`;

const Desc = styled.p`
  margin: 20px 0px;
  color: white;
`;

const Price = styled.span`
  font-weight: 100;
  color:white;
  font-size: 40px;
`;

const FilterContainer = styled.div`
margin: 10px;
 
`;

const Filter = styled.div`
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  color: white;
`;

// const FilterColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
//   margin: 0px 5px;
//   cursor: pointer;
// `;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;
