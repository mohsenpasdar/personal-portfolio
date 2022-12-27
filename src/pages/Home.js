import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'
import '../styles/Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hi, my name is Mohsen</h2>
                <div className='prompt'>
                    <p>A software developer with a passion for learning and creating!</p>
                    <a href='https://www.linkedin.com/in/mohsenpasdar/' target={'_blank'}><LinkedInIcon /></a>
                    <a href='mailto:mohsenpasdar@gmail.com'><EmailIcon /></a>
                    <a href='https://github.com/mohsenpasdar' target={'_blank'}><GithubIcon /></a>
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-End</h2>
                        <span>
                            ReactJS, Redux, HTML, CSS
                        </span>
                    </li>
                    <li className='item'>
                        <h2>Back-End</h2>
                        <span>
                            NodeJS
                        </span>
                    </li>
                    <li className='item'>
                        <h2>Languages</h2>
                        <span>
                            JavaScript
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Home;