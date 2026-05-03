import logoLockup from "@/assets/vayaana-logo.svg";

interface LogoLockupProps {
  className?: string;
}

const LogoLockup = ({ className }: LogoLockupProps) => (
  <img src={logoLockup} alt="VAYAANA Interiors" className={className} />
);

export default LogoLockup;
