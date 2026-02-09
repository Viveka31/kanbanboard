import Board from "./components/Board";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-teal-200 to-amber-200 p-6">
      <h1 className="text-4xl font-black text-center text-teal-900 mb-8">
        🌈 Kanban Board
      </h1>
      <Board />
    </div>
  );
}
