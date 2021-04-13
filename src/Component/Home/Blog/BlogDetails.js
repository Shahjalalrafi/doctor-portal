import React from 'react';

const BlogDetails = ({info}) => {
    return (
        <div >
            <h6>{info.title}</h6>
            <p>{info.desc}</p>
        </div>
    );
};

export default BlogDetails;