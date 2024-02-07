import React, { useState } from 'react';

const ProgressUpdatePage = () => {
  const [goals, setGoals] = useState([
    { id: 1, title: '目標1', progress: 50 },
    { id: 2, title: '目標2', progress: 20 },
    // 初期状態でいくつかの目標を設定
  ]);

  const updateProgress = (id, newProgress) => {
    setGoals(goals.map(goal => {
      if (goal.id === id) {
        return { ...goal, progress: newProgress };
      }
      return goal;
    }));
  };

  return (
    <div>
      <h1>進捗更新</h1>
      {goals.map((goal) => (
        <div key={goal.id}>
          <h2>{goal.title}</h2>
          <input
            type="range"
            min="0"
            max="100"
            value={goal.progress}
            onChange={(e) => updateProgress(goal.id, e.target.value)}
          />
          <span>{goal.progress}%</span>
        </div>
      ))}
    </div>
  );
};

export default ProgressUpdatePage;