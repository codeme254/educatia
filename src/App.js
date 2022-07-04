import './App.css';
import Hero from './Hero/Hero';
import About from './About/About';
import Courses from './Courses/Courses';
import Pricing from './Pricing/Pricing';
import BlogSection from './Blog/BlogSection';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Courses />
      <Pricing />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
