import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import InputBox from './components/InputBox';
import Navbar from './components/Navbar';
import ErrorBox from './components/ErrorBox';


function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue ] = useState('');
  const [error, setError] = useState(false);

  // useEffect(() => {
  //  localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos])
  return (
    <div className="App">
      <Navbar />
      {error ? <ErrorBox /> : undefined}
      <div className='container'>
        <InputBox value={value} changeValue={setValue} list={todos} updateList={setTodos} setError={setError} />
      </div>
      
      <div className='card-container'>
        {todos.map((todo) => <Card key={todo.id} id={todo.id} data={todo.todo} list={todos} setList={setTodos} />)}
      </div>
    </div>
  );
}

export default App;
