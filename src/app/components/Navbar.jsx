"use client";
import React from 'react';
import IconButton from "./common/IconButton";
import Link from 'next/link';
import HamMenu from './common/HamMenu';
import Image from 'next/image';
import { prefix } from '../prefix';

const Navbar = ({toggleMenu, isSidebarOpen}) => {
  const onHome = () => {
    if (isSidebarOpen) toggleMenu();
  }

  return (
    <nav className="bg-white p-4 h-20 flex justify-between items-center shadow-sm fixed w-full top-0 z-50 border-b-2 max-w-[1130px] rounded">
      <div className="flex items-center w-2/5 justify-start">
        <Link onClick={onHome} href="/" className="flex items-center justify-center">
            <Image src={`${prefix}/sore.png`} alt="Logo" width={130} height={35} priority/>
        </Link>
        <Link onClick={onHome} href="/" className="flex items-center justify-center">
            <Image src={`${prefix}/latan.png`} alt="Logo" width={130} height={35} priority/>
        </Link>
      </div>
      <div className="flex items-center justify-end">
        <Link href="/"><IconButton src={`${prefix}/home.svg`} altText="user"/></Link>
        <HamMenu isOpen={isSidebarOpen} onClick={toggleMenu}/>
      </div>
    </nav>
  );
};

export default Navbar;
