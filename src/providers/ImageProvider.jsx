import React, { createContext, useState } from 'react';
import bg1 from '/images/places/coxsbazar.png';

export const imageContext = createContext(null);

const ImageProvider = ({children}) => {
    const [text, setText] = useState("Cox's Bazar is a famous tourist destination known for its long sandy beach. It is located in the southeastern part of Bangladesh and is one of the most popular beach resorts in the world. The beach is known for its natural beauty, with a long stretch of golden sand and blue waters. Tourists often enjoy beachcombing, engaging in various water sports, and visiting nearby attractions like Himchari National Park. The best time to visit Cox's Bazar is from November to February when the weather is pleasant. Accommodation options are plentiful, ranging from budget-friendly hotels to luxurious resorts along the beach.");
    const [url, setUrl] = useState(bg1);

    const [title, setTitle] = useState('Cox\'s Bazar');
    const setTextImage = {
        title,

        url,
        text,
        setText,
        setUrl,
        setTitle,

    }
    return (
        <imageContext.Provider value={setTextImage}>
            {children}
        </imageContext.Provider>
    );
};

export default ImageProvider;