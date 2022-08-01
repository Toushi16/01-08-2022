import { useReducer } from 'react';
import './index.css';
import Button from '../Button';

const data = [
    {
        id: '1',
        advice: 'Watch television and films in English',
    },
    {
        id: '2',
        advice: 'Read English books/newspapers',
    },
    {
        id: '3',
        advice: 'Label things in your house',
    },
    {
        id: '4',
        advice: 'Make notes of new vocabulary',
    },
    {
        id: '5',
        advice: 'Surround yourself with English speakers',
    },
    {
        id: '6',
        advice: 'Figure out your best time to learn',
    },
    {
        id: '7',
        advice: 'Listen to British and American music',
    },
    {
        id: '8',
        advice: 'Language swap',
    },
    {
        id: '9',
        advice: 'Practise English whenever you can',
    },
    {
        id: '10',
        advice: 'Record yourself and your lesson',
    },
];

const Container = () => {

    const initialState = { count: 0 };

    function reducer(state, action) {
        switch (action.type) {
            case 'next':
                return { count: state.count + 1 };
            case 'previous':
                return { count: state.count - 1 };
            default:
                throw new Error();
        };
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    let advice = data[state.count];

    return (
        <div className='Container'>
           
            <div className='Container__text'>
                <h1>Advice for improving your English</h1>
                <p>{advice.advice}</p>
                <span>Advice number #{advice.id}</span>
            </div>

            <Button onClick={ () => dispatch ({ type:'previous'})} disabled={ state.count < 1 } textContent='Previous' />
            <Button onClick={ () => dispatch ({ type:'next'})} disabled={ state.count >= data.length - 1 } textContent='Next' />
        </div>
    );
};

export default Container;