import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        {isOpen ? (
          <button className="question-btn" onClick={() => setIsOpen(false)}>
            <AiOutlineMinus />
          </button>
        ) : (
          <button className="question-btn" onClick={() => setIsOpen(true)}>
            <AiOutlinePlus />
          </button>
        )}
      </header>
      {isOpen && <p>{info}</p>}
    </article>
  );
};
export default Question;
