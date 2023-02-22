import React from 'react';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="layout_wrap">
      <header>
        <Link href="/">검색1</Link>
        <Link href="/">검색2</Link>
      </header>
      <main className="layout_container">{children}</main>
    </div>
  );
}
