import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizGalera from '../src/components/QuizGalera/';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] =React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>

        <title>Quiz - Programação</title>
        <meta name="title" content="Quiz - Programação"/>
        <meta name="description" content="Venha testar seus conhecimentos sobre programação."/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://aluraquiz-base.jonatasfelipe.vercel.app/"/>
        <meta property="og:title" content="Quiz - Programação"/>
        <meta property="og:description" content="Venha testar seus conhecimentos sobre programação."/>
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://aluraquiz-base.jonatasfelipe.vercel.app/"/>
        <meta property="twitter:title" content="Quiz - Programação"/>
        <meta property="twitter:description" content="Venha testar seus conhecimentos sobre programação."/>
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
      </Head>
      <QuizContainer>
        <QuizLogo/>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Digite seu nome"
                value={name}
                />
              <Button type="submit" disabled={name.length === 0}>
                 {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>Dá uma olhada nesses quizes incriveis que o pessoal da Imersão React fez:</p>
            <QuizGalera linkQuiz="https://imersao-alura-peach.vercel.app/" />
            <QuizGalera linkQuiz="https://quiz-beatles.victorcorrea1.vercel.app/" />
            <QuizGalera linkQuiz="https://aluraquiz-show.noebezerra.vercel.app/" />
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/jonatasfelipe" />
    </QuizBackground>
  );
}