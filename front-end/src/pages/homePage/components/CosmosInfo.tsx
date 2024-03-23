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
      <section className="h-full flex-col flex justify-between">
        {/* cosmos info */}
        <div>
          <h1 className="font-tenorSans font-bold text-3xl">Cosmos Hub</h1>
          <p className="mt-1">
            The Cosmos Hub is an Internet of Blockchains, a network of
            blockchains able to communicate with each other in a decentralized
            way.
          </p>
        </div>

        {/* icons list */}
        <div className="flex gap-3 mt-5">
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
      </section>
    </>
  );
}

export default CosmosInfo;
