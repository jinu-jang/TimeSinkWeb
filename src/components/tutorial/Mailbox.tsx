import React from 'react';

/* Basic Component example for inline logical expressions
 * https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
 */

interface IProps {
    unreadMessages: Array<string>
}

export default function Mailbox(props: IProps) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    You hvae {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    )
}
