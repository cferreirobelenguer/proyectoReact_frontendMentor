import logo from './logo.svg';
import './assets/css/App.css';
import Header from './components/Header'
import Container from './components/Container'
import Container2 from './components/Container2'
import Container3 from './components/Container3'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
        <Header></Header>
        <Container></Container>
        <Container2></Container2>
        <Container3></Container3>
        <Footer></Footer>
    </div>
  );
}

export default App;
