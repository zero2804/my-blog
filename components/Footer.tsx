import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="w-full bg-[#071422] text-base-text mt-12">
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <p className="text-sm mb-4">© {new Date().getFullYear()} Мой блог. Все права защищены.</p>

        <div className="flex justify-center gap-6 text-base-subtitle text-2xl">
          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-blue transition"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://t.me/"
            target="_blank"
            className="hover:text-blue transition"
          >
            <FontAwesomeIcon icon={faTelegram} />
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            className="hover:text-blue transition"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href="mailto:example@mail.com"
            className="hover:text-blue transition"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </footer>
  );
}
