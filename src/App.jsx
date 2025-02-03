// App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Build from './pages/Build';
import BundleBuilder from './components/bundle/BundleBuilder';
import StandardBundleIntro from './components/bundle/StandardBundleIntro';
import About from './pages/About';
import Contact from './pages/Contact';
import ThankYou from './components/bundle/ThankYou';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/build" element={<Build />} />
        <Route path="/build/standard" element={<StandardBundleIntro />} />
        <Route path="/build/standard/customize" element={<BundleBuilder mode="standard" initialStep={2} />} />
        <Route path="/build/custom" element={<BundleBuilder mode="custom" />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;