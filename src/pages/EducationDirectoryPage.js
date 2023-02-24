import { Container } from 'reactstrap';
import CampsitesList2 from '../features/campsites/CampsitesList2';
import SubHeader from '../components/SubHeader';
const CampsitesDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Directory' />
            <CampsitesList2 />
        </Container>
    );
};

export default CampsitesDirectoryPage;