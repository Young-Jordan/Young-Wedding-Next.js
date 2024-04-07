import DetailsNav from "./detailsNav";

export default function DetailsLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
        {children}
        <DetailsNav />
      </>
    );
  }