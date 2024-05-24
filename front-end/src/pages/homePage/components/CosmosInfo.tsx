import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";

function CosmosInfo() {
  return (
    <>
      <section className="mb-5">
        {/* cosmos info */}

        <div className="flex justify-between items-center max-sm:flex-col max-sm:justify-none max-sm:items-start">
          <h1 className="font-tenorSans text-3xl max-sm:text-xl max-md:text-2xl">
            0G
          </h1>

          {/* icons list */}
          <div className="flex gap-3 max-lg:my-2">
            {/* 0G website */}
            <a
              aria-label="0G website"
              href="https://0g.ai/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-800 transition-all ease-in-out duration-300"
            >
              <FontAwesomeIcon icon={faGlobe} size="xl" />
            </a>

            {/* cosmos github */}
            <a
              aria-label="0G github"
              href="https://github.com/0glabs/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-800 transition-all ease-in-out duration-300"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>

            {/* cosmos twitter */}
            <a
              aria-label="0G twitter"
              href="https://twitter.com/0G_labs"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-800 transition-all ease-in-out duration-300"
            >
              <FontAwesomeIcon icon={faXTwitter} size="xl" />
            </a>

            {/* cosmos telegram */}
            <a
              aria-label="0G telegram"
              href="https://t.me/web3_0glabs"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-800 transition-all ease-in-out duration-300"
            >
              <FontAwesomeIcon icon={faTelegram} size="xl" />
            </a>

            {/* cosmos discord */}
            <a
              aria-label="0G discord"
              href="https://discord.com/invite/0glabs"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-800 transition-all ease-in-out duration-300"
            >
              <FontAwesomeIcon icon={faDiscord} size="xl" />
            </a>
          </div>
        </div>

        <p className="mt-1 max-md:text-sm max-sm:text-xs">
          0G is an infinitely scalable data availability layer and data storage system that provides the necessary infrastructure to scale Web3 and bring novel use cases on-chain.
        </p>
      </section>
    </>
  );
}

export default CosmosInfo;
