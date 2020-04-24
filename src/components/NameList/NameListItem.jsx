import React from 'react';
import moment from 'moment';

function NameListItem(props){
    return (
        <li>
            <p>
                <img src={ props.avatar} /> {props.name}
            </p>
            <p>City: {props.city}</p>
            <p>Email: {props.email}</p>
            <p>
                BirthDay: {moment(props.birthday).format('DD-MM-YYYY')}
                {/* {new Intl.DateTimeFormat('en-US').format(new Date(props.birthday))} en-GB(time format) en-US si-LK */}
            </p>
        </li>
    );
}

export default NameListItem;