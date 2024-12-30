import { Spinner } from "@chakra-ui/react";

const LoadingCarts = () => {
  return (
    <div className="flex pb-10 flex-col justify-between items-center">
      <div className="flex flex-col text-center py-16 gap-4">
        <div className=" ">
          <Spinner color="purple" />
        </div>

        <p className="font-semibold text-[13px]">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingCarts;
