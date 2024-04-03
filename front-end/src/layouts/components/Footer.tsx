function Footer() {
  return (
    <>
      <footer className="mt-auto opacity-30 text-xs py-3 w-full max-w-screen-xl block">
        <div className="flex w-full px-3 gap-10 justify-between">
          <span>©Margery Olethea</span>
          <div className="flex gap-5">
            <a
              aria-label="Margery Olethea LinkedIn"
              href="https://www.linkedin.com/in/margery-olethea-07597a158/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              aria-label="Margery Olethea Github"
              href="https://www.github.com/MargeryOlethea"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
