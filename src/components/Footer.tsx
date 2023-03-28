import Link from "next/link";
const Footer = () => {
  return (
    <footer className="text-center mt-2">
      <Link href={"https://github.com/Mynraw"} target={"_blank"}>
        <span className="text-white">by Mynraw</span>
      </Link>
    </footer>
  );
};

export default Footer;
