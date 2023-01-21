import styled from "styled-components";

export const Content = styled.div`
  padding: 25px;
`;
export const Detail = styled.span`
  padding: 15px;
  font-size: 48px;
  color: #ffffff;
`;
export const DetailsContent = styled.div`
  width: 1500px;
  height: 660px;
  background-color: green;
  border-radius: 37px;
  padding: 26px 44px;
  display: flex;
  margin: 56px auto;
  background-color: ${(props) => props.color};
  position: relative;
`;
export const SpriteImg = styled.img`
  width: 60%;
`;

export const SpriteContent = styled.div`
  width: 282px;
  height: 282px;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Sprites = styled.div`
  display: flex;
  row-gap: 44px;
  width: 285px;
  flex-wrap: wrap;
`;

export const StatsContent = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 343px;
  height: 100%;
  flex-wrap: wrap;
  border-radius: 12px;
  margin-left: 35px;
  padding: 20px;
  font-size: 2rem;
  row-gap: 10px;
`;
export const Stats = styled.div`
  display: flex;
  font-size: 0.8rem;
  height: 1.3rem;
`;
export const StatsName = styled.span`
  flex: 2.8;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
`;
export const StatsNumber = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StatsBar = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
`;
export const Bar = styled.div`
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  border-radius: 10px;
  height: 10px;
`;

export const RightContent = styled.div`
  width: 30%;
  height: 100%;
  margin-left: 68px;
  display: flex;
  flex-direction: column;
`;

export const PokebalContent = styled.img`
  position: absolute;
  right: -120px;
  top: -118px;
  height: 900px;
`;

export const PokeImage = styled.img`
  width: 350px;
  position: absolute;
  z-index: 2;
  right: 20px;
  top: -140px;
`;

export const Name = styled.span`
  font-size: 48px;
  z-index: 2;
  &::first-letter {
    text-transform: uppercase;
  }
`;
export const TypeContent = styled.div`
  width: 220px;
  height: 35px;
  display: flex;
  column-gap: 5px;
`;

export const Type = styled.img`
  max-width: 100px;
  height: 32px;
  border: dotted 1px white;
  border-radius: 10px;
  z-index: 2;
`;

export const Moves = styled.div`
  width: 292px;
  height: 453px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-top: 35px;
  padding: 18px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  overflow-y: auto;
  z-index: 2;
`;

export const Move = styled.div`
  width: fit-content;
  height: 40px;
  padding: 10px;
  border-radius: 12px;
  background-color: #ececec;
  font-size: 14px;
  text-transform: capitalize;
`;
