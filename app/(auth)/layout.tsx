const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center flex-center">
      {children}
    </div>
  );
};

export default Layout;
