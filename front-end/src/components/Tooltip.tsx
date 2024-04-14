import toast from "react-hot-toast";

function Tooltip({ text }: { text: string }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <>
      <span
        className="z-10 left-5 top-3 absolute px-5 py-1.5 rounded-2xl bg-violet-200 text-sm text-gray-700 border border-violet-400 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 max-md:text-[10px] max-lg:left-0 max-lg:max-w-64"
        style={{ wordWrap: "break-word" }}
      >
        <span
          className="bg-gradient-to-r from-gray-700 to-violet-600 text-transparent bg-clip-text hover:cursor-pointer hover:bg-gradient-to-l transition-all ease-in-out duration-150"
          onClick={copyToClipboard}
        >
          {text}
        </span>
      </span>
    </>
  );
}

export default Tooltip;
