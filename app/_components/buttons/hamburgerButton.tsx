
type HamburgerButtonProps = {
  isMobile: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: () => {};
};

export default function HamburgerButton(
  { isMobile, setMobileMenuOpen }: HamburgerButtonProps
){
  return (
    <div className="nav-button-container my-auto ml-auto mr-2">
      <button 
        className={`hamburger-button ${isMobile ? "flex opacity-100 m-3 " : "absolute opacity-0 w-0"}`} 
        onClick={() => setMobileMenuOpen()}>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </button>
    </div>
)
}