import React from 'react';

interface IntroProps {
    name?: user
}

interface user {
    firstName: string,
    lastName: string
}

function formatName(user: user) {
    return user.firstName + ' ' + user.lastName;
}

export default function ShowName(props: IntroProps) {
    return (
        <h1>
            Hello, {props.name?formatName(props.name):'Stranger'}
        </h1>
    );
}
