import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';
import classes from './Navbar.module.css';

function Navbar() {
  return (
    <div className={classes.nav}>
        <div className={classes.logo}>
            <div className={classes.logoCircle}></div>
            <div className={classes.logoText}>Buildit</div>
        </div>
        <div className={classes.items}>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
        </div>
        <Button>Need a project ?</Button>
    </div>
  )
}

export default Navbar