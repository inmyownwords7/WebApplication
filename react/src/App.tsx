import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
function handleClick() {
    console.log('Link clicked!');
  }

export function App() {
    return (
        <div>
            <header>{/*<NxWelcome title="reactstrap" />*/}</header>
            <main>
                <HomePage title="Homepage" />
                <Link to="/" onClick={handleClick}>Home</Link>
            </main>
            <Footer title="Footer" />
        </div>
    );
}

export default App;
