import { useState } from 'react';
import Question from './components/Question';
import data from './data';

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {questions.map((question) => {
          const { title, info, id } = question;
          return <Question title={title} info={info} key={id} />;
        })}
      </section>
    </main>
  );
};
export default App;
