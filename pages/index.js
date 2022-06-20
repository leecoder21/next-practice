import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";
import styled from "styled-components";

export default function Home({ results }) {
  const router = useRouter();

  const goToDetail = (id, title) => {
    router.push({
      pathname: `movies/${title}/${id}`,
    });
  };

  return (
    <Container>
      <Seo title="home" />
      {results?.map((movie) => (
        <div key={movie.id}>
          <Movie
            onClick={() => goToDetail(movie.id, movie.original_title)}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
          <Title>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </Title>
        </div>
      ))}
    </Container>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();

  return {
    props: {
      results,
    },
  };
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  gap: 20px;
`;

const Movie = styled.img`
  max-width: 100%;
  border-radius: 12px;
  transition: transform 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05) translateY(-10px);
  }
`;

const Title = styled.h4`
  font-size: 18px;
  text-align: center;
`;
