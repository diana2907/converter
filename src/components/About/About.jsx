import css from 'components/About/About.module.css';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
export const About = () => {
  return (
    <div className="container">
      <h2>About us</h2>
      <div className={css.block}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, minima
          blanditiis. Neque quibusdam temporibus, placeat iste doloribus
          eligendi praesentium! Unde sed pariatur facere in ut. Iure deserunt
          facere dolores officiis! Praesentium nam delectus nulla maiores? Eos
          libero sunt qui nostrum porro labore unde neque, molestias atque
          maiores blanditiis vero mollitia architecto ipsam pariatur dolores
          accusantium illum quia totam nisi aliquam! Eveniet molestiae autem
          laboriosam saepe, perferendis quia veritatis labore quaerat asperiores
          doloribus eius ex incidunt minus corporis mollitia temporibus, dolorem
          velit voluptatem illum esse. Dolorem dolorum ipsa veniam excepturi
          deserunt?
        </p>
        <img className={css.img} src={img1} alt="" />
      </div>
      <div className={css.block}>
        <img className={css.img} src={img2} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, minima
          blanditiis. Neque quibusdam temporibus, placeat iste doloribus
          eligendi praesentium! Unde sed pariatur facere in ut. Iure deserunt
          facere dolores officiis! Praesentium nam delectus nulla maiores? Eos
          libero sunt qui nostrum porro labore unde neque, molestias atque
          maiores blanditiis vero mollitia architecto ipsam pariatur dolores
          accusantium illum quia totam nisi aliquam! Eveniet molestiae autem
          laboriosam saepe, perferendis quia veritatis labore quaerat asperiores
          doloribus eius ex incidunt minus corporis mollitia temporibus, dolorem
          velit voluptatem illum esse. Dolorem dolorum ipsa veniam excepturi
          deserunt?
        </p>
      </div>
    </div>
  );
};
