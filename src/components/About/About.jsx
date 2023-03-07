import css from 'components/About/About.module.css';
import img1 from '../../images/develop.jpg';
import img2 from '../../images/code.jpg';
export const About = () => {
  return (
    <section className={css.about}>
      <div className="container">
        <h2 className={css.title}>About us</h2>
        {/* <div className={css.block}> */}
        <div className={css.block}>
          <p>
            Voluptatibus qui labore ipsam laudantium blanditiis provident odio
            dolores ullam corporis, illum reiciendis! Expedita aut natus minus
            quaerat optio beatae labore cum, harum culpa accusantium earum quod
            nam, quo dolom dolorum pariatur iure deserunt ex incidunt ratione
            reprehenderit adipisci cumque. Deleniti. Quam recusandae asperiores
            blanditiis repudiandae perferendis consequatur veritaae perspiciatis
            assumenda commodi temporibus nulla numquam incidunt illo cupiditate
            exercitationem, nesciunt sequi impedit repellendus. Iure optio
            nesciunt voluptatum excepturi. Sequi ab nostrum cupiditate harum rem
            vel odit id? Maiores molestias similique quibusdam optio nesciunt
            neque ullam exercitationem autem, asperiores deleniti incidunt ab
            libero. Assumenda optio quaerat non ratione facilis. Iusto illo
            minus ipsam hic unde recusandae, accusantium quae provident deleniti
            odit eligendi adipisci aspernatur illum itaque, libero quasi?
            Nesciunt aliquam, ab fugit beatae omnis architecto nostrum corporis
            sed necessitatibus?
          </p>

          <img src={img1} alt="img1" width="370" height="294" />
        </div>
        <div className={css.block}>
          <img src={img2} alt="img2" width="370" height="294" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
            natus sunt facilis voluptates at asperiores dicta veritatis, dolorum
            inventore, necessitatibus modi quasi reiciendis doloribus optio cum
            quo obcaecati fugiat rem. Inventore natus, culpa neque, officia sint
            quasi provident consectetur maxime perferendis in, magnam veritatis
            rem laborum! Adipisci sequi hic inventore! Quos aliquam placeat
            tenetur hic dolorum, soluta veritatis reprehenderit illo. Alias fuga
            molestiae eos reprehenderit vitae doloremque iure obcaecati
            consequatur id. Neque eos ipsa corporis facere perferendis, ipsam
            velit veniam quo aliquid, esse, optio sint officiis tempora? Sit,
            esse corrupti. Tempore exercitationem necessitatibus perspiciatis
            quae, provident error ipsum molestias reiciendis placeat sint
            molestiae consectetur eius qui rerum praesentium cumque atque
            voluptatibus? Est, optio perspiciatis. Eligendi laboriosam
            praesentium rem minus sunt! Nobis, voluptate id? Laboriosam officia
            tempore quidem ut totam sed recusandae fuga illo dolorem animi
            veniam, provident possimus quod facilis libero reprehenderit rerum
            eaque quia veritatis. Laboriosam ipsam consequatur est.
          </p>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};
