import { AboutPage } from 'pages/AboutPage';
import { RatesPage } from 'pages/RatesPage';
import { Route, Routes } from 'react-router-dom';
import { Contacts } from './Contacts/Contacts';
import { Layout } from './Layout/Layout';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<RatesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}
