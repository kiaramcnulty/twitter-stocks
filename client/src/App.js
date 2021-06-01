import './App.css';
import React, { useState, useEffect } from 'react';
import 'rbx/index.css';
import { Container, Title, Box, Media, Image, Content, Footer } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee)

const Banner = ({ title }) => (
  <Title style = {{color: 'white', paddingTop:'40px', textAlign:"center"}}>{ title }</Title>
);

const TweetList = ({ tweets }) => (
  <div>
    {/* { courses.map(course => <TwitterTweetEmbed tweetId={parseInt(course.id)}/>) } */}
    { tweets.map(tweet => <Tweet key={tweet.id} tweet={ tweet } />) }
  </div>
);

// pass in
const Tweet = ({ tweet }) => (
  <Box style = {{backgroundColor: '#E8E8E8'}}>
  <Media>
    <Media.Item align="left">
      <Image.Container size={64}>
        <FontAwesomeIcon icon={["fab", "twitter-square"]} fontSize={'50px'} />
      </Image.Container>
    </Media.Item>
    <Media.Item>
      <Content>
        <p>
          {tweet.text}
        </p>
      </Content>
    </Media.Item>
  </Media>
</Box>
);

const App = () => {
  const [stockList, setStockList] = useState({ data: [] });
  const url = 'http://localhost:8081/stocks';

  useEffect(() => {
    const fetchStockList = async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setStockList(json);
    }
    fetchStockList();
  }, [])

  if (stockList.data) {
    return (
      <div style = {{backgroundColor: '#1DA1F2'}}>
      <Container fluid>
        <Banner title={ '$AAPL' }/>
        <TweetList tweets={ stockList.data } />
        <Footer style = {{backgroundColor: '#1DA1F2'}}></Footer>
      </Container>
      </div>

    );
  }
  else {
    return (<div>Loading...</div>);
  }
};

export default App;
