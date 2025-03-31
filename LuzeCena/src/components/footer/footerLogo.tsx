import Logo from "../logo";
import styles from "./Footer.module.css";

const FooterLogo = () => {
  return (
    <div >
      <Logo className={styles.logo} src="./LogoBranca.png" alt="Logo" />
      <p>Onde a realidade encontra a fantasia!</p>
    </div>
  );
};

export default FooterLogo;