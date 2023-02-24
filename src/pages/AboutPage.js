import {Col,Row,Container,Card,CardBody,CardHeader} from 'reactstrap';
import SubHeader from '../components/SubHeader';
import PartnersList from '../features/partners/PartnersList';
import {useSpring, animated} from 'react-spring';


const AboutPage = () => {

    const animatedStyle = useSpring({
        from: {
            opacity:0,
            transform: 'scale(1,0)',
        },
        to: {
            opacity:1,
            transform: 'scale(1,1)' 
        }
      });

    return(
        <Container>
            <SubHeader current='About Us'/>
            
            <Row className='row-content'>
                <Col xs='12'>
                    <h3>Skills</h3>
                </Col>
                <PartnersList />
            </Row>
        </Container>
    )
}

export default AboutPage;