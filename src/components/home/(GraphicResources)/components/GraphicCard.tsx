import Image from 'next/image';

const images = [
  '/graphic/images/box-1.png',
  '/graphic/images/box-2.jpg',
  '/graphic/images/box-3.jpg',
  '/graphic/images/box-4.jpg',
  '/graphic/images/box-5.jpg',
  '/graphic/images/box-6.jpg',
  '/graphic/images/box-7.png',
  '/graphic/images/box-8.jpg',
  '/graphic/images/box-9.jpg',
  '/graphic/images/box-10.jpg',
  '/graphic/images/box-11.jpg',
];

export default function GraphicCard() {
  return (
    <section className="w-full">
      <div className="container-custom">
        {/* =====================================================
    LAPTOP / DESKTOP
    1280px Design
====================================================== */}
        <div
          className="hidden lg:grid gap-[12px]"
          style={{
            gridTemplateColumns: '790fr 285fr 600fr',
            gridTemplateRows: '285px 285px 425px',
          }}>
          {/* LEFT TOP */}
          <div
            className="grid gap-[18px]"
            style={{
              gridTemplateColumns: '270fr 497fr',
              gridColumn: '1',
              gridRow: '1',
            }}>
            <Box src={images[0]} />
            <Box src={images[1]} />
          </div>

          {/* CENTER TALL */}
          <div
            className="min-h-0"
            style={{
              gridColumn: '2',
              gridRow: '1 / span 2',
            }}>
            <Box src={images[2]} />
          </div>

          {/* RIGHT TOP */}
          <div
            className="grid gap-[12px]"
            style={{
              gridTemplateColumns: '200fr 370fr',
              gridColumn: '3',
              gridRow: '1',
            }}>
            <Box src={images[3]} />
            <Box src={images[4]} />
          </div>

          {/* LEFT MIDDLE */}
          <div
            className="grid gap-[12px]"
            style={{
              gridTemplateColumns: '502fr 276fr',
              gridColumn: '1',
              gridRow: '2',
            }}>
            <Box src={images[5]} />
            <Box src={images[6]} />
          </div>

          {/* RIGHT MIDDLE */}
          <div
            className="min-h-0"
            style={{
              gridColumn: '3',
              gridRow: '2',
            }}>
            <Box src={images[7]} />
          </div>

          {/* BOTTOM ROW */}
          <div
            className="grid gap-[12px]"
            style={{
              gridTemplateColumns: '665fr 384fr 637fr',
              gridColumn: '1 / -1',
              gridRow: '3',
            }}>
            <Box src={images[8]} />
            <Box src={images[9]} />
            <Box src={images[10]} />
          </div>
        </div>

        {/* =====================================================
            TABLET
            768px Design
        ====================================================== */}
        <div
          className="
            hidden
            md:grid
            lg:hidden
            gap-[10px]
          "
          style={{
            gridTemplateColumns: '1.38fr 1.10fr 1.60fr',
            gridTemplateRows: '167px 188px 274px',
          }}>
          {/* LEFT TOP */}
          <div
            className="grid gap-[10px]"
            style={{
              gridTemplateColumns: '172fr 323fr',
              gridColumn: '1 / span 2',
              gridRow: '1',
            }}>
            <Box src={images[0]} />
            <Box src={images[1]} />
          </div>

          {/* RIGHT TALL */}
          <div
            className="min-h-0"
            style={{
              gridColumn: '3',
              gridRow: '1 / span 2',
            }}>
            <Box src={images[2]} />
          </div>

          {/* LEFT MIDDLE */}
          <div
            className="grid gap-[10px]"
            style={{
              gridTemplateColumns: '323fr 177fr',
              gridColumn: '1 / span 2',
              gridRow: '2',
            }}>
            <Box src={images[5]} />
            <Box src={images[6]} />
          </div>

          {/* BOTTOM */}
          <div
            className="grid gap-[10px]"
            style={{
              gridTemplateColumns: '445fr 249fr',
              gridColumn: '1 / -1',
              gridRow: '3',
            }}>
            <Box src={images[8]} />
            <Box src={images[9]} />
          </div>
        </div>

        {/* =====================================================
    MOBILE
    435px Design
    5 Images
====================================================== */}
        <div className="grid md:hidden gap-[10px] w-full">
          {/* TOP ROW
      132px + 241px
  */}
          <div
            className="grid gap-[10px] w-full "
            style={{
              gridTemplateColumns: '132fr 241fr',
              height: '139px',
            }}>
            <Box src={images[0]} />
            <Box src={images[1]} />
          </div>

          {/* MIDDLE ROW
      220px + 153px
  */}
          <div
            className="grid gap-[10px] w-full"
            style={{
              gridTemplateColumns: '220fr 153fr',
              height: '140px',
            }}>
            <Box src={images[2]} />
            <Box src={images[3]} />
          </div>

          {/* BOTTOM
      381px
  */}
          <div
            className="w-full"
            style={{
              height: '204px',
            }}>
            <Box src={images[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   REUSABLE IMAGE BOX
============================================================ */

function Box({ src }: { src: string }) {
  return (
    <div className="relative h-full w-full min-h-0 overflow-hidden bg-neutral-100 rounded-xl">
      <Image
        src={src}
        alt=""
        fill
        className="object-cover"
        sizes="
          (max-width: 767px) 100vw,
          (max-width: 1023px) 33vw,
          25vw
        "
      />
    </div>
  );
}
