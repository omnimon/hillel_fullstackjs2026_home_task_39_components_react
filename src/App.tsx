import { StatefulCounter } from './components/StatefulCounter/StatefulCounter';
import { StatelessMessage } from './components/StatelessMessage/StatelessMessage';

function App() {
  return (
    <main className="app">
      <h1>React Homework 39</h1>

      <section className="card">
        <h2>Stateful component</h2>
        <StatefulCounter />
      </section>

      <section className="card">
        <h2>Stateless component</h2>
        <StatelessMessage
          title="Reusable stateless component"
          text="This component receives data through props and only renders it."
        />
      </section>
    </main>
  );
}

export default App;
