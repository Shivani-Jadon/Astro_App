import React from 'react'
import Link from '@material-ui/core/Link';

function SectionHeader(props) {
    return (
        <div>
            <div className="heading-container">
                <span className="heading">{props.heading}</span>
                <Link className="forward">See All &gt;</Link>
            </div>
            <div className="content">{props.msg}</div>
        </div>
    )
}

export default SectionHeader;
