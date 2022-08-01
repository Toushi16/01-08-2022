import './index.css';

const Button = ({textContent, onClick, disabled}) => {
    return (
        <button className='Button' onClick={ onClick } disabled={ disabled }> { textContent } </button>
    );
};

export default Button;