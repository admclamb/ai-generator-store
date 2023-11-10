import Navbar from "../components/navbar/Navbar";

export type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <header className="bg-white">
        <Navbar />
      </header>

      <main className="bg-white grow">{children}</main>
    </>
  );
};

export default Layout;
