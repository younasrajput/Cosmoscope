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
            Cosmos Hub
          </h1>

          {/* icons list */}
          <div className="flex gap-3 max-lg:my-2">
            {/* cosmos website */}
            <a
              href="https://cosmos.network/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-800 transition-all ease-in-out duration-300"
            >
              <FontAwesomeIcon icon={faGlobe} size="xl" />
            </a>

            {/* cosmos github */}
            <a
              href="https://github.com/cosmos"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-800 transition-all ease-in-out duration-300"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>

            {/* cosmos twitter */}
            <a
              href="https://twitter.com/cosmos"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-800 transition-all ease-in-out duration-300"
            >
              <FontAwesomeIcon icon={faXTwitter} size="xl" />
            </a>

            {/* cosmos telegram */}
            <a
              href="https://t.me/cosmosproject"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-800 transition-all ease-in-out duration-300"
            >
              <FontAwesomeIcon icon={faTelegram} size="xl" />
            </a>

            {/* cosmos discord */}
            <a
              href="https://discord.gg/cosmosnetwork"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-800 transition-all ease-in-out duration-300"
            >
              <FontAwesomeIcon icon={faDiscord} size="xl" />
            </a>
          </div>
        </div>

        <p className="mt-1 max-md:text-sm max-sm:text-xs">
          The Cosmos Hub is an Internet of Blockchains, a network of blockchains
          able to communicate with each other in a decentralized way.
        </p>
      </section>
    </>
  );
}

export default CosmosInfo;
