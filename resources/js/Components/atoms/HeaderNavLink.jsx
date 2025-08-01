import { Link } from "@inertiajs/react";
const HeaderNavLink = ({ href, children, ...props }) => (
  <Link
    href={href}
    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
    {...props}
  >
    {children}
  </Link>
);

export default HeaderNavLink;