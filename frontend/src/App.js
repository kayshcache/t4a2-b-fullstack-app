import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Pages/Home';

// Create and export stateful contexts for React Context API
const TraineeContext = React.createContext();
export const TraineeContextConsumer = TraineeContext.Consumer;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.updateCurrentTrainee = (item) => {
      this.setState({
	currentTrainee: item,
      });
    };

    this.state = {
      trainees: [],
      currentTrainee: {},
      updateCurrentTrainee: this.updateCurrentTrainee,
    }
  }

  componentDidMount() {
    axios.get('/trainees')
      .then(res => {
	this.setState({
	  trainees: res.data
	})
      }).catch(err => console.warn(err));
  }

  render() {
    return (
      <TraineeContext.Provider value={this.state}>
	<BrowserRouter>
	  <div className="container-fluid">
	    <NavBar />
	    <Switch>
              <Route path="/" component={Home} exact />
	    </Switch>
	    <Footer />
	  </div>
	</BrowserRouter>
      </TraineeContext.Provider>
    );
  }
}

