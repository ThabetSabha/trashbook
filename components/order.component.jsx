import Image from 'next/image';

const Order = ({ theme }) => {
    return (
        <section className={`order ${theme}`} id="order">

            <h2>Available Now!</h2>

            <div className="img-contianer">
                <Image src="/images/product2.png" alt="product" width={1200} height={960} />

            </div>

            <a
                id="order-button"
                href="https://www.google.com/search?hl=&site=&q=How+to+stop+making+terrible+decisions"
                rel="noopener noreferrer"
                target="_blank">
                Order Here
            </a>


        </section>
    )
}

export default Order;