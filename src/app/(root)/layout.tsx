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
    </main>
  );
};
export default HomeLayout;
