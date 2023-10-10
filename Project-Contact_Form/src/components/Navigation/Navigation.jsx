import styles from "./Navigation.module.css"
const Navigation = () => {
  return (
    <nav className={`${styles.Navigation} container`}>
       <div className="logo">
            <img src="/public/Image/logo.png" alt="logo"/> 
       </div>
       <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
 );
}

export default Navigation;
