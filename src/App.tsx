import './App.css';
import Contacts from './components/Contacts/Contacts';

import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

import Layout from './layout/Layout';

function App() {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Projects />
      <Contacts />
    </Layout>
  );
}

export default App;
