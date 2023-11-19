import DaisyLogo from "../logo/daisy";

export const NavBar = () => {
  return (
    <div className="navbar sticky top-0 glass z-40">
      <a className="btn btn-ghost text-xl">
        <DaisyLogo /> daisyUI playground
      </a>
    </div>
  );
};
