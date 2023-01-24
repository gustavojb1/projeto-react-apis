import styled from "styled-components";

export const Container = styled.div`
  padding: 60px 40px;
  font-size: 48px;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const ContainerCards = styled.div`
  margin-top: 55px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 50px;
`;

export const BtnContent = styled.div`
  padding-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 25px;
`;

export const BtnNavigate = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: 0px;
  cursor: pointer;
`;
