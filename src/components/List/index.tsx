import React from "react";

function List() {
  const tasks = [
    {
      task: 'React',
      time: '02:00:00'
    },
    {
      task: 'TypeScript',
      time: '01:00:00'
    },
    {
      task: 'JavaScript',
      time: '00:30:00'
    }
  ]

  return (
    <aside>
      <h2>Daily Tasks</h2>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <h3> {item.task} </h3>
            <span> {item.time} </span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default List