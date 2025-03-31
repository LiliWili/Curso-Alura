import styles from "./Footer.module.css";

const FooterInstitucional = () => {
  return (
    <div className={styles.institucional}>
      <h3 className={styles.titulo}>Institucional</h3>
      <span>Sobre nós</span>
      <span>Para empresa</span>
      <span>Club fidelidade</span>
    </div>
  );
};

export default FooterInstitucional;