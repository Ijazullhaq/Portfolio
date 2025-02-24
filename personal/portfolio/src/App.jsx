import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blogs';
import Education from './components/Education';
import CVTabs from './Training';
import LanguageSkills from './components/LanguagesSkill';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header />
            <About />
            <Education/>
            <CVTabs />
            <Skills />
            <LanguageSkills/>
            <Blog/>
            <Projects />
            <Contact />
            <Footer/>
        </div>
    );
}

export default App;
