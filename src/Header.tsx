import React from 'react';

interface HeaderProps {
    title: string
}

export default function Header(props: HeaderProps) {
    return (
        <>
            <p>This is a header section. Title: {props.title}</p>
        </>
    );
}
