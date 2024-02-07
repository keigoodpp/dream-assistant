import React, { useState } from 'react';

const GoalSettingPage = () => {
  const [goal, setGoal] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 目標と期限のデータを処理するロジックをここに追加
    alert(`目標: ${goal}\n期限: ${deadline}`);
  };

  return (
    <div>
      <h1>目標設定</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="goal">目標:</label>
          <input
            type="text"
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="deadline">達成期限:</label>
          <input
            type="date"
            id="deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </div>
        <button type="submit">目標を設定</button>
      </form>
    </div>
  );
};

export default GoalSettingPage;