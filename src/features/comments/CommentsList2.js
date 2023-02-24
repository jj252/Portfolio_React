import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';
import { selectEducationById } from '../campsites/educationSlice';
import CommentForm from './CommentForm';
import { useSelector } from 'react-redux';
import {Routes, Route, NavLink} from  'react-router-dom';
import Website_info from '../../utils/Website_Info';

const CommentsList = ({ campsiteId }) => {
    //console.log(campsiteId);
    const comments = useSelector(selectEducationById(campsiteId));
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
            There are no comments for this certificate yet.
        </Col>
    );
};

export default CommentsList;