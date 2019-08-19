import React from 'react';

const NotFound = (props) => {
    props.staticContext&&(props.staticContext.notFound = true);
    return (<div>not found</div>)
}

export default NotFound;