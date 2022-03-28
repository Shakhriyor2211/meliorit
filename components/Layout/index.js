import Footer from "./footer";
import Header from "./header";

function Layout(props) {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">{props.children}</div>
      <Footer />
    </main>
  );
}

export default Layout;
