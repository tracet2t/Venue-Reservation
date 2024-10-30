import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="admin-dashboard">
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
