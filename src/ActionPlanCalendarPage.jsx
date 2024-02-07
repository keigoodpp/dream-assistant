import React, { useState } from 'react';

const ActionPlanCalendarPage = () => {
  const [actions, setActions] = useState({});
  const [date, setDate] = useState('');
  const [action, setAction] = useState('');

  const addAction = () => {
    if (!date || !action) return; // 日付またはアクションが空の場合は追加しない
    setActions((prevActions) => ({
      ...prevActions,
      [date]: [...(prevActions[date] || []), action],
    }));
    setAction(''); // アクション入力をクリア
  };

  return (
    <div>
      <h1>アクションプランカレンダー作成</h1>
      <div>
        <label htmlFor="date">日付:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="action">アクション:</label>
        <input
          type="text"
          id="action"
          value={action}
          onChange={(e) => setAction(e.target.value)}
        />
        <button onClick={addAction}>アクションを追加</button>
      </div>
      <div>
        <h2>アクションプラン</h2>
        <ul>
          {Object.keys(actions).sort().map((date) => (
            <li key={date}>
              <strong>{date}</strong>
              <ul>
                {actions[date].map((action, index) => (
                  <li key={index}>{action}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ActionPlanCalendarPage;