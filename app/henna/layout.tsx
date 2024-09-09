import HennaNav from "./hennaNav";

export default function DetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <HennaNav />
    </>
  );
}
