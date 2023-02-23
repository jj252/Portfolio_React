import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';
import CommentForm from './CommentForm';
import { useSelector } from 'react-redux';
import {Routes, Route, NavLink} from  'react-router-dom';

const CommentsList = ({ campsiteId }) => {
    //console.log(campsiteId);
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId));

    if (comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })}
                <CommentForm campsiteId={campsiteId} />
                <h1>Website Link</h1>
                <a target="_blank" href="https://imaginative-donut-c608b3.netlify.app">Millionaire Game</a>
                <h1>GitHub Link</h1>
                <a target="_blank" href="https://github.com/jj252/react_project_millionaire.git">Git Hub Link</a>
                <h1>Sample Code</h1>
            </Col>
        );
    }
    return (
        <Col md='5' className='m-1'>
            There are no comments for this campsite yet.
        </Col>
    );
};

export default CommentsList;