import { Container } from 'reactstrap';
import CampsitesList2 from '../features/campsites/CampsitesList2';
import SubHeader2 from '../components/SubHeader2';
const CampsitesDirectoryPage = () => {
    return (
        <Container>
            <SubHeader2 current='Education' />
            <CampsitesList2 />
        </Container>
    );
};

export default CampsitesDirectoryPage;