import React, { useState, useEffect } from 'react';

import { RandomAdvice } from 'models/random';

const ComingSoonPage = () => {

    const [changingContent, setChangingContent] = useState<boolean>(true);
    const [currentAdvice, setCurrentAdvice] = useState<RandomAdvice>();

    const getAdvice = () => {
        fetch('https://api.adviceslip.com/advice').then(response => response.json())
        .then((response: RandomAdvice) => setCurrentAdvice(response))
        .catch((err: string) => {
            console.error(err);
        });
    };

    useEffect(() => {
        if (changingContent) {
            getAdvice();

            setChangingContent(false);
        }
    }, [changingContent]);

    return (
        <div>
            <h2>Coming soon</h2>
            {currentAdvice && <p>{currentAdvice.slip.advice}</p>}
            {currentAdvice && <img src={`https://robohash.org/${currentAdvice.slip.advice}`} />}
        </div>
    );
};

export default ComingSoonPage;