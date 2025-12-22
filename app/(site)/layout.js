import Footer from "../components/Footer";
import Header from "../components/Header";



export default function SiteLayouts({ children }) {
  return (
    
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
  );
}