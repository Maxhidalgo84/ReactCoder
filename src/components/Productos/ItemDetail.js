import React from 'react'
import { Container, Box} from '@mui/material'
import styled from '@emotion/styled';
import ItemCount from '../ItemCount';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


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
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;


export const ItemDetail = ({listproduct}) => {

    const onAdd = (count) =>{
        MySwal.fire({
            title: "Listo!",
            text: `Se agregan ${count} al carrito`,
        });
    } 


    return (
        <Container sx={{ padding: 10, display:"flex"}}>
           <Box sx={{ width: 600, height:300}}>
          <Image src={listproduct.imagen1}/>
          <Image src={listproduct.imagen2}/>
          <Image src={listproduct.imagen3}/>
        </Box>
        <Box sx={{ flex: 1, padding: "0px 50px"}}>
          <Title>{listproduct.title}</Title>
          <Desc>
            {listproduct.description2}
          </Desc>
          <Price>Precio: ${listproduct.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Talle</FilterTitle>
              <FilterSize>
                <FilterSizeOption>38</FilterSizeOption>
                <FilterSizeOption>39</FilterSizeOption>
                <FilterSizeOption>40</FilterSizeOption>
                <FilterSizeOption>41</FilterSizeOption>
                <FilterSizeOption>42</FilterSizeOption>
                <FilterSizeOption>43</FilterSizeOption>
                <FilterSizeOption>44</FilterSizeOption>
                <FilterSizeOption>45</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <Box sx={{ width: "50%", margin:"0 auto"}}>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
          </Box>
        </Box>
        </Container>
    )
}
