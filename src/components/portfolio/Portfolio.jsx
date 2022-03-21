import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const Portfolio = () => {
    const data = [
        {
            id: 1,
            image: IMG1,
            title: 'Titulo del Proyecto',
            github: 'https://github.com/elmerjacobo97/Portafolio',
            demo: 'https://elmerjacobo.netlify.app/',
        },
        {
            id: 2,
            image: IMG2,
            title: 'Titulo del Proyecto',
            github: 'https://github.com/elmerjacobo97/Portafolio',
            demo: 'https://elmerjacobo.netlify.app/',
        },
        {
            id: 3,
            image: IMG3,
            title: 'Titulo del Proyecto',
            github: 'https://github.com/elmerjacobo97/Portafolio',
            demo: 'https://elmerjacobo.netlify.app/',
        },
        {
            id: 4,
            image: IMG4,
            title: 'Titulo del Proyecto',
            github: 'https://github.com/elmerjacobo97/Portafolio',
            demo: 'https://elmerjacobo.netlify.app/',
        },
        {
            id: 5,
            image: IMG5,
            title: 'Titulo del Proyecto',
            github: 'https://github.com/elmerjacobo97/Portafolio',
            demo: 'https://elmerjacobo.netlify.app/',
        },
        {
            id: 6,
            image: IMG6,
            title: 'Titulo del Proyecto',
            github: 'https://github.com/elmerjacobo97/Portafolio',
            demo: 'https://elmerjacobo.netlify.app/',
        },
    ];

    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>

                            <h3>{title}</h3>
                            {/* Todo: Aquí proyecto + Live Demo */}
                            <div className="portfolio__item-cta">
                                <a
                                    href={github}
                                    className="btn"
                                    target="__blank"
                                >
                                    Github
                                </a>
                                <a
                                    href={demo}
                                    className="btn btn-primary"
                                    target="__blank"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
