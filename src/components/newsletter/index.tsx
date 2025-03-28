
import Button from "../button";
import FieldSet from "../fieldset";
import InputText from "../inputText";
import styles from "./Newsletter.module.css";



const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <h2 className={styles.titulo}>Inscreva-se para ganhar descontos!</h2>
      <form className={styles.form}>
        <FieldSet>
          <InputText placeholder="Digite o seu melhor email" />
        </FieldSet>
        <Button variant="default" type="submit">
          Inscreva-se
        </Button>
      </form>
    </section>
  );
};

export default Newsletter;