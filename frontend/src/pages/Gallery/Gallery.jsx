import SectionHeader from "../../components/common/SectionHeader";
import GalleryGrid from "../../components/gallery/GalleryGrid";

export default function Gallery() {
  return (
    <section className="section">
      <SectionHeader eyebrow="Gallery" title="Images and videos by style" description="Filter finished work by braids, color, weaving, locks, bridal, men's styles, and kids styles." />
      <GalleryGrid />
    </section>
  );
}
