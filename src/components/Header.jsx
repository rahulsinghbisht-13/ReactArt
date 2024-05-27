import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center mb-8 md:mb-12">
      <img
        src={logo}
        alt="A canvas"
        className="mb-8 w-44 h-44 object-contain"
      />
      <h1 className="text-2xl md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title">
        ReactArt
      </h1>
      <p className="text-stone-600 text-center">
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
