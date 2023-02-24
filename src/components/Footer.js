import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import style from '../app/shared/StudentList.module.css';

const Footer = () => {
    return <footer className={style.my_Footer}>
        <Container>
            <Row>

                <Col xs={{ size: 4, offset: 1 }} sm='2'>
                    <h5 className={style.change_Color}>Links</h5>
                    <ul className='list-unstyled'></ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/education'>Education</Link>
                        </li>
                        <li>
                            <Link to='/about'>Skills</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                
                </Col>
                <Col xs='6' sm='3' className='text-center'><h5 className={style.change_Color}>Social</h5>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-google'
                            href='http://youtube.com/'
                        >
                            <i className='fa fa-youtube' />
                        </a></Col>
                <Col sm='4' className='text-center'><a
                            role='button'
                            className='btn btn-link'
                            href='tel:+12065551234'
                        >
                            <i className='fa fa-phone' /> 1-403-383-3616
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:notreal@notreal.co'
                        >
                            <i className='fa fa-envelope-o' /> jeremyjeremiah587@gmail.com
                        </a></Col>

            </Row>
        </Container>

    </footer>
}

export default Footer;