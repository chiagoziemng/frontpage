
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
      

      <div className="flex md:justify-center gap-x-4 mt-10">
        © 2025 OMAR AND BLASIUS LIMITED - All Rights Reserved.
        <Link href="/" className="text-blue-500">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;