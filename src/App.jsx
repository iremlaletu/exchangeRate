import Currency from "./components/Currency";

function App() {
  return (
    <div className="flex items-start justify-center h-screen pt-32">
      <div className="bg-neutral-50 p-14 rounded-lg shadow-lg">
        <Currency />
      </div>
    </div>
  );
}

export default App;
