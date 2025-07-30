import Link from "next/link";
import styles from "./linkbutton.module.css";

export const LinkButton = ({ children, href }) => {
  return (
    <Link
      href={href}
      className={`relative border w-[200px] h-10 flex items-center ${styles.button}`}
    >
      <span className="flex items-center top-0 left-0 w-full justify-center mix-blend-difference">
        Sobre nós
      </span>
    </Link>
  );
};
