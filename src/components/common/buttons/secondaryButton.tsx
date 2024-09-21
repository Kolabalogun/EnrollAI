const SecondaryButton = ({
  handleClick,
  title,
}: {
  handleClick: () => void;
  title: string;
}) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="py-2 raleway px-8 border-2 bg-[#f9fafb] rounded-md font-semibold text-xs text-[#9aa2b3] "
    >
      {title}
    </button>
  );
};

export default SecondaryButton;
