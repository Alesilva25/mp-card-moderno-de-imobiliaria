import React from 'react';
import Header from './components/Header';
import ContentMain from './components/ContentMain';
import BonusSection from './components/BonusSection';
import MentoraSection from './components/MentoraSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="position-relative">
        <Header />
      </div>
      <div className="w-100 position-relative" style={{ marginTop: "-80px", zIndex: 100 }}>
        <ContentMain />
      </div>
      <div className="position-relative" style={{ marginTop:"-50px", zIndex: 50,  }}>
        <BonusSection />
      </div>
      <MentoraSection />
      <Footer />
    </div>



  );
}

export default App;