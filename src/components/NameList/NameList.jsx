import React from 'react';

import NameListItem from './NameListItem';

function NameList(){
    return(
        <div>
            <h1>Name List</h1>
            <hr />
            <ul>
                <NameListItem fname="Pubudu" lname="Arosha"/>
                <NameListItem fname="OPENM" lname="MIC"/>
                <NameListItem fname="Techno" lname="MIC"/>
                <NameListItem fname="BlaBla" lname="Bla"/>
            </ul>
        </div>
    );
}

export default NameList;