import { Col } from "reactstrap";
import Partner from "./Partner";
import { selectAllPartners } from "./partnersSlice";
import { selectSpecificPartners } from "./partnersSlice";
import { selectSpecificPartners2 } from "./partnersSlice";
import { useSelector } from "react-redux";

const PartnersList = () => {
    const partners = useSelector(selectAllPartners);
    const partners2 = useSelector(selectSpecificPartners);
    const partners3 = useSelector(selectSpecificPartners2);
    return(
        <>
        <Col className='mt-4 col-3'>
            {partners.map((partner)=>{
                return(
                    
                    <div className='d-flex mb-5 ' key={partner.id}>
                        <Partner partner={partner}/>
                    </div>
                
                )
            })}
        </Col>
        <Col className='mt-4 col-3'>
        {partners2.map((partner)=>{
            return(
                
                <div className='d-flex mb-5' key={partner.id}>
                    <Partner partner={partner}/>
                </div>
            
            )
        })}
        </Col>
        <Col className='mt-4 col-3'>
        {partners3.map((partner)=>{
            return(
                
                <div className='d-flex mb-5' key={partner.id}>
                    <Partner partner={partner}/>
                </div>
            
            )
        })}
        </Col>
    </>
    )
}

export default PartnersList;