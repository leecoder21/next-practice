import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function NavBar() {
  const router = useRouter();
  return (
    <Wrapper>
      <Title>Next | movies</Title>
      <Menu>
        <Link href="/">
          <Item active={router.pathname === "/"}>Home</Item>
        </Link>
        <Link href="/about">
          <Item active={router.pathname === "/about"}>About</Item>
        </Link>
      </Menu>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  max-width: 120px;
  margin-bottom: 5px;
  font-size: 20px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Item = styled.a`
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => (props.active ? "tomato" : "")};
  cursor: pointer;
`;
