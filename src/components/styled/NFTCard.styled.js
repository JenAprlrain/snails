import styled from "styled-components";
import Image from "next/image";
import { Colors } from "../Theme";

const NFTCardEl = styled.article`
 position: relative;
 display: flex;
 flex-direction: column;
 align-items: center;
`;


const Card =styled.div`
  border-radius: 15px;
  overflow: hidden;
  z-index:2;
  background-color: ${Colors.Black};
  color: ${Colors.Black};
  position: relative;
  display: flex;
  flex-direction: column;

`;
const ItemImage=styled.div``;

const InfoSection=styled.div`
display:flex;
backdrop-filter: blur(1rem);
flex-direction: column;
padding: 1em 1.5rem;
flex: 1;
gap: 0.5rem;
`;
const TSection=styled.div``;
const EditionEl=styled.span ``;
const StockEl = styled.span``;
const ItemTitle = styled.h2`
  font-size: 1.4rem;
`;
const PriceSection = styled.div`
`;
const BottomSection = styled.div``;
const AvatarEl=styled.span``;
const LikesEl=styled.span``;
const Bar1 = styled.span``;
const Bar2 = styled.span``;


export default function NFTCard({item}) {
    const {
 Id,
 Badge,
 ImageUrl,
 Edition,
 Stock,
 Title,
 Price,
 Avatar,
 Author,
 Likes,

} =item;
  return <NFTCardEl>
    <Card>
        <ItemImage>
            <Image src={ImageUrl} width="400" height="400"></Image>
        </ItemImage>
        <InfoSection>
            <ItemTitle>{Title}</ItemTitle>
            <PriceSection> {Price}</PriceSection>
        </InfoSection>

    </Card>
  </NFTCardEl>;
}
