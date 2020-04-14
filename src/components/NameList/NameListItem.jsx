import React from 'react';

function NameListItem(props){
    return (
        <li>{props.fname} / {props.lname}</li>
    );
}

export default NameListItem;