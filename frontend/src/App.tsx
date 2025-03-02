import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {

  function refreshTodos() {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg space-y-6">
        <div className="bg-white shadow-lg rounded-xl p-6">
          <Todos />
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6">
          <AddTodo onAdd={refreshTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
