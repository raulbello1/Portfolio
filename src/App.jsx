import { useState } from 'react';
import { Header } from './components/header/Header';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';

export default function App() {

  const [selectedPage, setSelectedPage] = useState(null)

  return (
    <div className="items-center relative justify-center">
      <Header selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <main className='flex flex-col'>
        {!selectedPage ? (
          <Home  setSelectedPage={setSelectedPage}/>
        ) : (
          <Contact />
        )
        }
      </main>
    </div>
  );
}
