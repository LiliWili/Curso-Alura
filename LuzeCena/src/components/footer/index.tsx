
import styles from "./Footer.module.css";
import FooterInfo from "./footerInfo";
import FooterInstitucional from "./footerInstitucional";
import FooterLogo from "./footerLogo";
import FooterRedes from "./footerRedes";

const Footer = () => {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape_informacoes}>
        <FooterLogo />
        <FooterInfo />
        <FooterInstitucional/>
        <FooterRedes/>
      </div>
    </footer>
  );
};

export default Footer;