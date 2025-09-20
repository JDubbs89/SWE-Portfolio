
type HamburgerButtonProps = {
  setMobileMenuOpen: () => void;
};

export default function HamburgerButton(
  { setMobileMenuOpen }: HamburgerButtonProps
){
  return (
    <div className="my-auto rounded-l-2xl rounded-r-none ml-auto">
      <button 
        className={`hamburger-button`} 
        onClick={() => setMobileMenuOpen()}>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </button>
    </div>
)
}