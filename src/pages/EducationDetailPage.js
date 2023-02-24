import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import { selectEducationById } from '../features/campsites/educationSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentsList from '../features/comments/CommentsList';
import CommentsList2 from '../features/comments/CommentsList2';
import SubHeader2 from '../components/SubHeader2';
import { useSelector } from 'react-redux';

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    const campsite = useSelector(selectEducationById(campsiteId));

    return (
        <Container>
            <SubHeader2 current={campsite.name} detail={true} />
            <Row>
                <CampsiteDetail campsite={campsite} />
                <CommentsList2 campsiteId={campsiteId} />
            </Row>
        </Container>
    );
};

export default CampsiteDetailPage;
