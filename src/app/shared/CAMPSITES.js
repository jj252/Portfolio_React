import reactLakeImg from '../assets/img/react-lake.jpg';
import chromeRiverImg from '../assets/img/chrome-river.jpg';
import breadCrumbImg from '../assets/img/breadcrumb-trail.jpg';
import reduxWoodsImg from '../assets/img/redux-woods.jpg';
import millionaire from '../assets/img/million.png';
import imposter from '../assets/img/imposter.jpg';
import info_page from '../assets/img/info_page.jpg';
import python_milly from '../assets/img/python_milly.jpg';
import port_page from '../assets/img/port_page.jpg';

export const CAMPSITES = [
    {
        id: 0,
        name: 'Millionaire React',
        image: millionaire,
        elevation: 1233,
        featured: false,
        description:
            'Who Wants To Be a Millionaire Build with React JS'
    },
    {
        id: 1,
        name: 'Find the Imposter Html/Css/Javascript',
        image: imposter,
        elevation: 877,
        featured: false,
        description:
            'Find The Imposter Build with Html/Css/Javascript'
    },
    {
        id: 2,
        name: 'Bootstrap/JQuery Information Page',
        image: info_page,
        elevation: 2901,
        featured: false,
        description:
            'Information Page build with Bootstrap and JQuery'
    },
    {
        id: 3,
        name: 'Python Millionaire Game',
        image: python_milly,
        elevation: 42,
        featured: true,
        description:
            "Millionaire Python Cli Version"
    }
    ,
    {
        id: 4,
        name: 'Portfolio Page',
        image: port_page,
        elevation: 42,
        featured: true,
        description:
            "My Portfolio Page"
    }
];
