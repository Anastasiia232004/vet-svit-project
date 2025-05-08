import Link from "next/link";

const Logo = () => {
    return (
      <div className="logo">
        <Link href="/">
          <img src="/images/vet_logo_black.png" alt="VetSvit" title="VetSvit" />
          VetSvit
        </Link>
      </div>
    );
  };
  
  export default Logo;
  