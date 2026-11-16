import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    window.location.replace('/');
  }, []);

  return (
    <main dir="rtl" lang="ar" style={{ padding: '3rem', textAlign: 'center' }}>
      <h1>تم دمج الموقع في أمان</h1>
      <p>سيتم تحويلك إلى موقع أمان الموحد.</p>
      <a href="/">الانتقال إلى أمان</a>
    </main>
  );
}
