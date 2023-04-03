import React from 'react';
import { Article } from '@component/Article';
import { Logic } from '@root/logic/Logic';
import { HomePage } from '@page/HomePage';
import { Blog } from '@root/pages/Blog';
import { NotFound } from '@root/pages/NotFound';
import { ArticleDetail } from '@root/components/ArticleDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Navbar } from './components/Navbar';
import { Link } from 'react-router-dom';

interface Props {
    logic: Logic;
}

export default class App extends React.Component<Props> {
  render() {
    return (
        <Router>
            <header>
                <div className="container">
                    <Navbar />
                </div>
            </header>
            <Routes>
                <Route path="/" element={<HomePage logic={new Logic()} />} />
                <Route path="/blog" element={<Blog logic={new Logic()} />} />
                {/* <Route path="/blog/:slug" element={<ArticleDetail {...props} title="" excerpt='' slug='' />} /> */}
                <Route path="/blog/:slug" element={<ArticleDetail logic={new Logic()} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <footer>
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} <Link to={"/"}>Jan Sůra design</Link></p>
                </div>
            </footer>
        </Router>
    );
  }
}
