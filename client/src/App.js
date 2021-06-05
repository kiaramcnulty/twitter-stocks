import './App.css';
import React, { useState, useEffect } from 'react';
import 'rbx/index.css';
import { Container, Title, Box, Media, Image, Content, Footer, Dropdown, Button } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee )

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
  <Box style = {{backgroundColor: '##F0F0F0'}}>
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
  // const [stockName, setStockName] = useState({ name: [] });
  let stockTitle = 'AAPL';
  const [stockName, setStockName] = useState('AAPL');
  const [stockList, setStockList] = useState({ data: [] });
  const url = 'http://localhost:8081/stocks/'+stockName;

  useEffect(() => {
    const fetchStockList = async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setStockList(json);
    }
    fetchStockList();
  }, [stockName])

  if (stockList.data) {
    return (
      <div style = {{backgroundColor: '#1DA1F2'}}>
      <Container fluid>

      <Dropdown style = {{marginTop: '30px', marginBottom: '30px', left:'45%' }}>
        <Dropdown.Trigger>
          <Button style = {{backgroundColor: '#657786'}}>
            <span style = {{color: 'white', fontSize:'35px'}}>${stockName}</span>
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Content>
            <Dropdown.Item onClick={() => setStockName("AAPL")}>AAPL</Dropdown.Item>
            <Dropdown.Item onClick={() => setStockName("ABNB")}>ABNB</Dropdown.Item>
            <Dropdown.Item onClick={() => setStockName("ADBE")}>ADBE</Dropdown.Item>
            <Dropdown.Item onClick={() => setStockName("ALK")}>ALK</Dropdown.Item>
            <Dropdown.Item onClick={() => setStockName("AMZN")}>AMZN</Dropdown.Item>
            <Dropdown.Item onClick={() => setStockName("BABA")}>BABA</Dropdown.Item>
            <Dropdown.Item onClick={() => setStockName("BMBL")}>BMBL</Dropdown.Item>
            <Dropdown.Item onClick={() => setStockName("DIS")}>DIS</Dropdown.Item>
            <Dropdown.Item onClick={() => setStockName("EBAY")}>EBAY</Dropdown.Item>
            <Dropdown.Item onClick={() => setStockName("FB")}>FB</Dropdown.Item>
            <Dropdown.Item onClick={() => setStockName("GOOG")}>GOOG</Dropdown.Item>
            <Dropdown.Item onClick={() => setStockName("MSFT")}>MSFT</Dropdown.Item>
            <Dropdown.Item onClick={() => setStockName("NASDAQ")}>NASDAQ</Dropdown.Item>
            <Dropdown.Item onClick={() => setStockName("NFLX")}>NFLX</Dropdown.Item>
            <Dropdown.Item onClick={() => setStockName("NVDA")}>NVDA</Dropdown.Item>
            <Dropdown.Item onClick={() => setStockName("PAYPL")}>PYPL</Dropdown.Item>
            <Dropdown.Item onClick={() => setStockName("QQQ")}>QQQ</Dropdown.Item>
            <Dropdown.Item onClick={() => setStockName("TGT")}>TGT</Dropdown.Item>
            <Dropdown.Item onClick={() => setStockName("TSLA")}>TSLA</Dropdown.Item>
            <Dropdown.Item onClick={() => setStockName("UPS")}>UPS</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Menu>
        </Dropdown>
        
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
