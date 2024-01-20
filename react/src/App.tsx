import HomePage from './pages/HomePage';
import Footer from './components/Footer';
export function App() {
    return (
        <div>
            <header>{/*<NxWelcome title="reactstrap" />*/}</header>
            <main>
                <HomePage title="Homepage" />
            </main>
            <Footer title="Footer" />
        </div>
    );
}

export default App;
