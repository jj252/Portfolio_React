import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';
import {selectCommentsByEducationId } from './EducationSlice2';
import {selectCommentsByEducationId2 } from './EducationSlice2';
import { selectEducationById } from '../campsites/educationSlice';
import CommentForm from './CommentForm';
import { useSelector } from 'react-redux';
import {Routes, Route, NavLink} from  'react-router-dom';
import Website_info from '../../utils/Website_Info';

const CommentsList2 = ({ campsiteId }) => {
    //console.log(campsiteId);
    const comments1 = useSelector(selectCommentsByEducationId(campsiteId));
    const comments = selectCommentsByEducationId2(campsiteId);
    console.log('COMMENTS',comments);
    if (comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>About</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })}
                <CommentForm campsiteId={campsiteId} />
                
            </Col>
        );
    }
    return (
        <Col md='5' className='m-1'>
            The details of this Certificate is comming soon.
        </Col>
    );
};

export default CommentsList2;