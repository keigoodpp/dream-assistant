import React, { useState } from 'react';

const FutureDiaryEntryPage = () => {
  const [goal, setGoal] = useState('');
  const [futureDate, setFutureDate] = useState('');
  const [diaryEntry, setDiaryEntry] = useState('');

  const generateDiaryEntry = () => {
    // 未来日記エントリーの生成ロジック
    const entry = `未来の日付 ${futureDate} には、「${goal}」を達成しています。これを達成するために、今日から毎日コツコツと努力を続けます。`;
    setDiaryEntry(entry);
  };

  return (
    <div>
      <h1>未来日記エントリー生成</h1>
      <div>
        <label htmlFor="goal">目標:</label>
        <input
          type="text"
          id="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="futureDate">未来の日付:</label>
        <input
          type="date"
          id="futureDate"
          value={futureDate}
          onChange={(e) => setFutureDate(e.target.value)}
        />
      </div>
      <button onClick={generateDiaryEntry}>エントリーを生成</button>
      <div>
        <h2>あなたの未来日記エントリー:</h2>
        <p>{diaryEntry}</p>
      </div>
    </div>
  );
};

export default FutureDiaryEntryPage;