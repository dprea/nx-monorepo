import { Navigation } from '../navigation/navigation';
import { RoutesComponent } from '../routes/routes';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import styles from './app.module.css';
import Welcome from './welcome';

export function App() {
  return (
    <div>
      <Welcome title="myapp" />
      <Navigation />
      <RoutesComponent />
    </div>
  );
}

export default App;
