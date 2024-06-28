import Footer from "@/components/footer";
import Header from "@/components/header";

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
export default HomeLayout;
