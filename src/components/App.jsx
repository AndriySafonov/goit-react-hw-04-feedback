
import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // обновляем состояния компонента  {good, neutral, bad,}
  // в соответствии с выбором пользователя
  const handleClick = e => {
    const { name } = e.target;
    //  this.setState({ [name]: this.state[name] + 1 });
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };

  // вычисляем общее количество собранных ответов
  const totalFeedback = good + neutral + bad;

  // вычисляем общее количество собранных ответов
  // и процента положительных ответов
  const positiveFeedbackPercentage =
    Math.round((100 * good) / totalFeedback) || 0;

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title={'Statistics'}>
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification title={'There is no feedback'} />
        )}
      </Section>
    </>
  );
}
