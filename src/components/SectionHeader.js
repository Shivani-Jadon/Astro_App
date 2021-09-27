import React from 'react'
import Link from '@material-ui/core/Link';

function SectionHeader(props) {
    return (
        <div>
            <div>
                <span>{props.heading}</span>
                <Link>See All</Link>
            </div>
            <div>{props.msg}</div>
        </div>
    )
}

export default SectionHeader;
