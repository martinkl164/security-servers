import { BrowserRouter } from 'react-router-dom';
import AppShell from './components/AppShell';
import AppRoutes from './AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <AppRoutes />
      </AppShell>
    </BrowserRouter>
  );
}
