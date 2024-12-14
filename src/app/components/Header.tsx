import classes from "./Header.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className={classes.header}>
      <div className="sec_inner">
        <Link className={classes.anchor} href="/">
          index
        </Link>
        <Link className={classes.anchor} href="/about">
          about
        </Link>
      </div>
    </header>
  );
}
