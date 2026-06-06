import PrimaryButton from "../../components/buttons/PrimaryButton";

export default function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center bg-salonDark px-4 text-center text-salonWhite">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-display text-5xl font-bold">Page not found</h1>
        <PrimaryButton to="/" className="mt-8">Return home</PrimaryButton>
      </div>
    </section>
  );
}
