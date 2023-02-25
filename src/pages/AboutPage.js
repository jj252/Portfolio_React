import {Col,Row,Container,Card,CardBody,CardHeader} from 'reactstrap';
import SubHeader from '../components/SubHeader';
import PartnersList from '../features/partners/PartnersList';
import {useSpring, animated} from 'react-spring';
import style from '../app/shared/StudentList.module.css';
import { useState } from 'react';


const AboutPage = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    console.log('WIDTH:',width,'HEIGHT',height);
    
      if (width < 800){
        return(
            <Container >
                <SubHeader current='Skills'/>
                
                <Row >
                    <Col xs='12'>
                        <h3>Skills</h3>
                        
                    </Col>
                    
                    
                    </Row> 
                    <PartnersList />
                
            </Container>
    )
        }
        else if (width > 800){
            return(
                <Container >
                    <SubHeader current='Skills'/>
                    
                    <Row >
                        <Col xs='12'>
                            <h3>Skills</h3>
                            
                        </Col>
                        
                        <PartnersList />
                        </Row> 
                        
                    
                </Container>
        )
        }

    
}


export default AboutPage;