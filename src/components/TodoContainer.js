/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import TodosList from './TodosList';
import Header from './Header';

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos())

  return (
    <div>
      <Header />
      <TodosList todos={this.state.todos} />
    </div>
  );
}
export default TodoContainer;
