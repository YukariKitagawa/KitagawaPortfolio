import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="text-white text-center bg-accent_color">
      <div className="flex items-center justify-center py-28 px-4">
        <p className="text-xl md:text-2xl">最後までご覧いただき<br/>ありがとうございました！</p>
        <Image src="/footer-dog.svg" alt="Lion illustration" width={86} height={111} />
      </div>
      <p>&copy; 2024 Yukari Kitagawa. All rights reserved.</p>
    </footer>
  )
}

export default Footer
