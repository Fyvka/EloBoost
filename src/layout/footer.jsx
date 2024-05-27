function Footer() {
   return (
      <footer className="page-footer grey darken-4">
         <div className="footer-copyright">
            <div className="container">
               mrFyvka © {new Date().getFullYear()}
               <a className="grey-text text-lighten-4 right" href="https://github.com/Fyvka">
                  Repository
               </a>
            </div>
         </div>
      </footer>
   );
}
export {Footer};
