import React from 'react';
import ValidationComp, { A } from './ValidationComp';

export default function App() {
    return (
        <div>
            <ValidationComp
                a={1}
                b
                g={new A()}
            />
        </div>
    )
}
