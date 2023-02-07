import classes from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="pageContainer">
        <span>"Keep in touch" - 2023. Copyright</span>

        <a
          href="https://www.linkedin.com/in/ihor-kuchin-6a3736203/"
          target={`_blank`}
          className={classes.footer__performer}
        >
          ik-web
        </a>
      </div>
    </footer>
  );
};
