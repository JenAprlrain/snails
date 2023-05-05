import Head from "next/head";
import styled from "styled-components";
import { Colors, Devices } from "./Theme";
import { BsGithub, BsGlobe } from "react-icons/bs";
import Link from "next/link";
import Button from "./styled/Button";
import Hero from "./Home/Hero";
import Mint from "./Home/Mint";
import About from "./Home/About";
import Team from "./Home/Team";
import Roadmap from "./Home/Roadmap";

const HomeEl = styled.article`

  color:${Colors.White}

`;

export default function Home() {
  return (
    <HomeEl>
      <Head>
        <title>racing-snails.vercel.app</title>
        <meta
          name="description"
          content="Cleaned create-next-app including styled-components and configured theme"
        />
        <link rel="icon" href="/replace.png" />
      </Head>
      <Hero />
      <Mint></Mint>
      <About></About>
      <Team></Team>
      <Roadmap></Roadmap>
    </HomeEl>

  );
}
