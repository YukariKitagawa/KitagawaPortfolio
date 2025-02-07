'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import * as motion from 'framer-motion/client'
import Image from 'next/image'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Top' },
    { href: '#About', label: 'About' },
    { href: '#Like', label: 'Like' },
    { href: '#Skill', label: 'Skill' },
    { href: '#Works', label: 'Works' },
    { href: '#Future', label: 'Future' },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // メニューのアニメーション設定
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    closed: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.5,
        ease: 'easeIn',
      },
    },
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-40">
      {/* ハンバーガーメニューアイコン */}
      <div className="flex items-center justify-end absolute z-50 right-0">
        <button
          className="outline-none mobile-menu-button p-4 m-4 bg-white rounded-full"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* メニュー */}
      <motion.div
        className="bg-accent_color h-screen text-center absolute top-0 left-0 right-0"
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
      >
        <ul className="w-56 absolute top-1/2 left-1/2 origin-center transform -translate-x-1/2 -translate-y-1/2">
          <li>
            <Image
              className="mx-auto"
              src="/main-dog.svg"
              alt=""
              width={84}
              height={84}
            />
          </li>
          {links.map((link) => (
            <li key={link.href} className="mb-4 bg-white">
              <Link
                href={link.href}
                className="block px-2 py-4 font-bold text-xl hover:opacity-50"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  )
}

export default Navigation
