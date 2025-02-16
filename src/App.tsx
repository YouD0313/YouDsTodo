import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ListBox from './components/list/ListBox';

function App() {
  return (
    <main className="h-screen relative min-w-80 overflow-hidden">
      <Header />
      <ListBox />
      <Footer />
    </main>
  );
}

export default App;
