import { copyToClipboard } from "../utils/copyToClipboard";

function Tooltip({ text }: { text: string }) {
  return (
    <>
      <span
        className="z-10 left-5 top-3 absolute px-5 py-1.5 rounded-2xl bg-violet-200 text-sm text-gray-700 border border-violet-400 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 max-md:text-[10px] max-lg:left-0 max-lg:max-w-64"
        style={{ wordWrap: "break-word" }}
      >
        <span
          className="bg-gradient-to-r from-gray-700 to-violet-600 text-transparent bg-clip-text hover:cursor-pointer "
          onClick={() => copyToClipboard(text)}
        >
          {text}
        </span>
      </span>
    </>
  );
}

export default Tooltip;
