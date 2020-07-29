import React,{ useState} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SubmitBus from './pages/submitBus'
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult'
import './App.css';

function App() {
  const [SearchQuery, setSearchQuery] = useState("")
  const [searchResult, setSearchResult] = useState([])

  const handleFormSubmit = (event) => {


  }

  return (
    
    <Router>
      {/* <Navbar />
      <Jumbotron />
      <Route exact path="/savebook" component={SaveBook} /> */}
      <Route exact path="/">
        <SearchForm query={SearchQuery} />
        <SearchResult result={searchResult}/>
      </Route>
      <Route path="/submit" component={SubmitBus} handleFormSubmit={handleFormSubmit} />
    </Router>
  );
}

export default App;
