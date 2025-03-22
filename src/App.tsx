import './App.css';

import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';

import Layout from './layout/Layout';

function App() {
  return (
    <Layout>
      <Hero />
      <Projects />
    </Layout>
  );
}

export default App;
