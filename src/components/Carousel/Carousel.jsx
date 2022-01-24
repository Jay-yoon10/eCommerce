import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Carousel.module.scss";
const CarouselHome = ({ products }) => {
    return (
        <Carousel>
            {products.map((item, i) => {
                let url = item.image;
                let title = item.title;
                let info = item.description;
                let className = styles.CarouselImg;
                return (
                    <Carousel.Item>
                        <div className={styles.Carousel}>
                            <div key={i} className={className}>
                                <img alt="product" src={url} />
                            </div>
                            <div className={styles.Carousel__caption}>
                                <Carousel.Caption>
                                    <h3
                                        className={styles.Carousel__title}
                                        key={i}
                                    >
                                        {title.substring(0, 25)} ...
                                    </h3>
                                    <p className={styles.Carousel__info}>
                                        {info.substring(0, 300)}...
                                    </p>
                                </Carousel.Caption>
                            </div>
                        </div>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
};

export default CarouselHome;
