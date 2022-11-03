import './App.css';
import { Component } from 'react';
import { CardList } from './components/card/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  render() {
    return (
      <div className="App">
        <SearchBox 
          placeholder='search monster'
          handleChange={e => this.setState({searchField: e.target.value})}
        />
        <CardList monsters={this.state.monsters.filter(m => m.name.toLowerCase().includes(this.state.searchField.toLowerCase()))}>
        </CardList>
      </div>
    );
  }
}

export default App;
