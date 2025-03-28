import Logo from "../logo";
import styles from "./Footer.module.css";

const FooterRedes = () => {
  return (
    <div >
      <h3 className={styles.titulo}>Siga nossas redes!</h3>
      <Logo className={styles.icones} src="./Ícones/Redes sociais/Whatsapp.png" alt="icone" />
      <Logo className={styles.icones} src="./Ícones/Redes sociais/Instragam.png" alt="icone" />
      <Logo className={styles.icones} src="./Ícones/Redes sociais/Tiktok.png" alt="icone" />
    </div>
  );
};

export default FooterRedes;