import Image from 'next/image';

const Landing = ({ theme }) => {
    return (
        <section className={`home ${theme}`} id="home">
            <div className="showcase">
                <h2>Trash-book</h2>
                <div className="product-image-landing">
                    <Image src="/images/product1.png" alt="product" width={954} height={484}/>
                </div>
                <div className="info">
                    <h3>Small but powerful.</h3>
                    <p>
                        The new Leica M6 offers 4k at 60fps, Raw Video & Full Frame
                        Sensor.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Landing;