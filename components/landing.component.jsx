import Image from 'next/image';

const Landing = ({ theme }) => {
    return (
        <section className={`home ${theme}`} id="home">
            <div className="showcase">
                <h2>TrashBook Pro</h2>
                <div className="product-image-landing">
                    <Image src="/images/product1.png" alt="product2" height={1129} width={1442} />
                </div>
                <div className="info">
                    <h3>Expensive</h3>
                    <p>
                        Same Trash quality you're used to,
                        now more overpriced.
                    </p>

                </div>
            </div>
        </section>
    )
}

export default Landing;