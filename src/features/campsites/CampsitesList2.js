//import { CAMPSITES } from '../../app/shared/CAMPSITES';
import {Col, Row} from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllEducation } from './educationSlice';
import { useSelector } from 'react-redux';

const CampsitesList = () => {
    const campsites = useSelector(selectAllEducation);
    return (
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col md='5' className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default CampsitesList;