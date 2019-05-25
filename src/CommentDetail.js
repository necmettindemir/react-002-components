import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="\" className="avatar">
                <img alt="avatar" src={props.avatar}/>
            </a>
            <div className="content">
                <a href="\" className="author">
                { props.firstName + " " + props.lastName } 
                </a>
                <div className="metadata">
                    <span className="data">
                    Today at 6:00 pm
                    </span>
                </div>
                <div className="text">
                    {faker.company.companyName()}
                </div>
            </div>        
        </div>
    );
}

export default CommentDetail;