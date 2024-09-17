import LogoBar from "@/components/common/logoBar";

interface GetStartedLayoutProps {
  children: React.ReactNode;
  others?: boolean;
}

const GetStartedLayout = ({ children, others }: GetStartedLayoutProps) => {
  return (
    <main className="min-h-screen bg-primary   px-5   py-5">
      <LogoBar />

      <div
        className={`min-h-[85vh] my-10 flex   flex-col w-full  ${
          !others && "justify-center items-center "
        }`}
      >
        <div className="flex flex-col  ">{children}</div>
      </div>
    </main>
  );
};

export default GetStartedLayout;
