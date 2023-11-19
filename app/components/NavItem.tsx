'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface NavProps {
    url: string;
    name: string;
}

const NavItem = (props: NavProps) => {
  let pathname = usePathname() || '/';
  const isActive = props.url === pathname;

  return (
    <Link
      key={props.url}
      href={props.url}
      className={clsx(
        'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
        {
          'text-neutral-500': !isActive,
        }
      )}
    >
      <span className="relative py-1 px-2">
        {props.name}
        {props.url === pathname ? (
          <motion.div
            className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
            layoutId="sidebar"
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 30,
            }}
          />
        ) : null}
      </span>
    </Link>
  );
}

export default NavItem;
