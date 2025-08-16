import Header from "../components/Header";
const MainLayout = ({ children }) => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main >{children}</main>{" "}
    
    </div>
  );
};

export default MainLayout;


