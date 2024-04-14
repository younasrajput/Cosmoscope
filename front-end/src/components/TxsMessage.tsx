function TxsMessage({ text }: { text: string }) {
  return (
    <>
      <span className="rounded-full bg-opacity-30 border text-xs text-center font-semibold py-1 px-2 bg-violet-400 border-violet-400">
        <span className="bg-gradient-to-r from-gray-800 bg-clip-text text-transparent  max-md:text-[8px] to-violet-600">
          {text}
        </span>
      </span>
    </>
  );
}

export default TxsMessage;
