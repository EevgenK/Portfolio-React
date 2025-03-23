import './App.css';

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
    </Layout>
  );
}

export default App;
