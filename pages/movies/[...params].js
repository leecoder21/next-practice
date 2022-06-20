import { useRouter } from "next/router";
import Seo from "../../components/Seo";
import styled from "styled-components";

export default function Detail({ params, data }) {
  const router = useRouter();

  console.log(data);

  const [title, id] = params || [];

  return (
    <Wrapper>
      <Seo title={title} />
      <Background
        img={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
      ></Background>
      <Container>
        <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
        <Contents>
          <Title>{title}</Title>
          <span>Release : {data.release_date}</span>
          <h3>Runtime : {data.runtime}분</h3>
          <h3>Rating : {data.vote_average}</h3>
          <p>{data.tagline}</p>
        </Contents>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 520px;
`;

const Background = styled.div`
  display: inline-block;
  width: 520px;
  height: 400px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  filter: blur(10px) grayscale(0.8);
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 15px;
  text-shadow: 1px 1px 2px black;

  img {
    display: flex;
    width: 200px;
    border-radius: 10px;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 250px;
  height: 250px;
  color: #ffffff;
`;

const Title = styled.h4`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export async function getServerSideProps({ params: { params } }) {
  const [title, id] = params || [];
  const response = await fetch(`http://localhost:3000/api/movies/${id}`);
  const data = await response.json();

  return {
    props: { params, data },
  };
}
