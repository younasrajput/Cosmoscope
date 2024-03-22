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
      <div className="h-full flex-col flex justify-between">
        {/* cosmos info */}
        <div>
          <span className="font-tenorSans font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-violet-900">
            Cosmos Hub
          </span>
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
      </div>
    </>
  );
}

export default CosmosInfo;
