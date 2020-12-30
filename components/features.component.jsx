import Image from 'next/image';

const Features = ({theme}) => {
    return (
        <div className={`features-container ${theme}`}>
            <section className="features" id="features">
                <h2>Features</h2>
                <div className="cards">
                    <div className="card">
                        <Image src="/images/feature1.png" alt="feature1" width={272} height={210} />
                        <h3>4k 60fps</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <div className="card">
                        <Image src="/images/feature2.png" alt="feature2" width={272} height={210} />
                        <h3>4k 60fps</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <div className="card">
                        <Image src="/images/feature3.png" alt="feature3" width={272} height={210} />
                        <h3>4k 60fps</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit
                        </p>
                    </div>
                </div>
            </section>
            <div className="wave">
            <Image src="/images/wave.png" alt="wave" height={510} width={1920}/>
            </div>
        </div>
    )
}

export default Features;