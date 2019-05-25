import React from 'react';

const ApprovalCard = (props) => 
{
    return (            
            <div className="ui card">
                <div className="content">{props.children}</div>
                <div className="extra content">
                <div className="ui two buttons">
                    <div id="btnApprove" className="ui basic green button">Approve</div>
                    <div id="btnReject" className="ui basic red button">Reject</div>
                </div>
                </div>                
            </div>
    );

}

export default ApprovalCard;