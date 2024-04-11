import Navbar from '@/components/Navbar';
import Tabbar from '@/components/Tabbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Tabbar />
    </>
  );
};

export default Layout;
