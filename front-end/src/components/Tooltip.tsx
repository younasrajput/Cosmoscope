function Tooltip({ text }: { text: string }) {
  return (
    <>
      <span className="z-10 left-5 top-3 absolute px-5 py-1.5 rounded-2xl bg-violet-200 text-sm text-gray-700 border border-violet-400 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
        <span className="bg-gradient-to-r from-gray-700 to-violet-600 text-transparent bg-clip-text">
          {text}
        </span>
      </span>
    </>
  );
}

export default Tooltip;
