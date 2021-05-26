import './App.css';

let applData = []
//TwitterClient.tweets.search(parameters)

// Search for Tweets within the past seven days
// https://developer.twitter.com/en/docs/twitter-api/tweets/search/quick-start/recent-search
fetch('http://localhost:8081/stocks')
    .then(response => {
      console.log("Hellooooo");
      return response.json()})
    .then(stocks => {
      let i = 0;
      while (i < stocks.data.length) {
        console.log(stocks.data[i].text)
        i++;
      }
    })

// const twitterClient = new TwitterClient({
//   apiKey: 'EuIaLWJLgINKLb0DLVYpgonxb',
//   apiSecret: 'nLZv1JWNEzPJomrPDPKfFWWvS60PPmLUA7fRdR36AicTnCQh9W',
//   accessToken: '2390103912-5QOVKCvNF7JqY3u1OFGNmSpJhiDbL9m0qwhml7R',
//   accessTokenSecret: 'DyyWnvYEKjQbEQno3uoESDHs0IXLz8wkMA8uZ61nTamwi',
// });

// // Search for a user
// async function requestData() {
//   console.log("requesting data");
//   const data = await twitterClient.accountsAndUsers.usersSearch({ q: 'twitterDev' });
//   console.log(data);

// }

// requestData();



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          $AAPL
        </p>
      </header>
    </div>
  );
}

export default App;
