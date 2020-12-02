import React from 'react';

/* Basic Component example for mapping arrays to list views
 * https://reactjs.org/docs/lists-and-keys.html#basic-list-component
 */
interface INumberListProps {
    numbers: Array<number>
}

export function NumberList(props: INumberListProps) {
    const numbers = props.numbers;
    const listItems = numbers.map((number: number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

/* Basic Component example for embedding mappings
 * https://reactjs.org/docs/lists-and-keys.html#embedding-map-in-jsx
 */
export function NumberListEmbedded(props: INumberListProps) {
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map((number: number) =>
                <li key={number.toString()}>
                    {number}
                </li>
            )}
        </ul>
    );
}
