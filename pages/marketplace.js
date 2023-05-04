import styled from "styled-components";
import { NFTs } from "../src/info";
import { Colors, Devices } from "../src/components/Theme";
import Grid from "../src/components/styled/Grid.styled";
import Link from "next/link";
import NFTCard from "../src/components/styled/NFTCard.styled";

const MarketplaceEl = styled.article`
display: flex;
flex-direction: column;
gap: 1rem;
align-items: center;
padding: 1rem;

@media ${Devices.Tablet}{
    padding: 1rem 3rem;
}

@media ${Devices.Laptop}{
    padding: 1rem 3rem;
}
@media ${Devices.Tablet}{
    padding: 1rem 3rem;
}

`;
const Title=styled.h1`
 font-size: 2.5rem;
 font-weight: 500;
`;
const TopSection=styled.div`
 display: flex;
 align-items: center;
 width: 100%;
 justify-content: space-between;
`;
const Sort=styled.div`
 border-radius: 30px;
 border: 1px solid ${Colors.Primary};
 padding: 0.4em 1rem;
 cursor: pointer;

`;
const Date = styled.div`
 background: ${Colors.Gray};
 border-radius: 30px;
 padding: 0.4rem 2.5rem;
`;
const ShowMore = styled.button`
 margin-top: 1rem;
 cursor: pointer;
 border: 1px solid ${Colors.Primary};
 padding: 1rem 2rem;
 color: ${Colors.Primary};
 background-color: transparent;
 border-radius: 5px;
 font-size: 1rem;
`;


export default function marketplace() {
  return <MarketplaceEl>
     <Title> Marketplace</Title>
     <TopSection>
     </TopSection>
     <Grid>
        {NFTs.map((nft) => {
            return <NFTCard item={nft} key={nft.Id} />;
        })}
     </Grid>
     <ShowMore>Show More</ShowMore>
  </MarketplaceEl>
}
