import DaisyLogo from "@/components/logo/daisy";

export default function Home() {
  return (
    <>
      <h1 className="text-5xl font-bold flex align-text-bottom">
        Hello <DaisyLogo />
        daisyUI
      </h1>
      <p className="text-xl">Welcome to daisyUI!</p>
      <div className="divider"></div>
      <div className="card mx-auto w-96 bg-base-100 shadow-xl image-full ">
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
