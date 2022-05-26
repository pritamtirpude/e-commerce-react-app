import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 25px;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  text-align: center;
`;
