import Image from "next/image";

const Landing = () => {
  return (
    <section className="home" id="home">
      <div className="showcase">
        <h2>TrashBook Pro</h2>
        <div className="product-image-landing">
          <Image
            src="/images/product1.png"
            alt="product2"
            height={960}
            width={1200}
          />
        </div>
        <div className="info">
          <h3>Expensive</h3>
          <p>Same Trash quality you're used to, now more overpriced.</p>
        </div>
      </div>
    </section>
  );
};

export default Landing;
