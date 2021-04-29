import React, { FC, useState } from 'react'
import { icons } from '../assets'
import { Logotype } from '../Logotype/Logotype'
import {
  INavLinkCreatorPropsNavLinks,
  NavLinkCreator,
} from '../NavLinkCreator/NavLinkCreator'
import { useSelector } from '../overrideHooks'
import { Search } from '../Search/Search'
import styles from './Navbar.module.scss'

export const Navbar: FC = () => {
  const [isTouch, setIsTouch] = useState(false)
  const isBurger = useSelector((state) => state.size.isBurger)
  const navLinksLeft: Array<INavLinkCreatorPropsNavLinks> = [
    { link: 'contractors' },
    { link: 'designers' },
    { link: 'vacancies' },
  ]

  const navLinksRight: Array<INavLinkCreatorPropsNavLinks> = [
    { link: 'login/register' },
    { withoutLinkName: 'profile', svgHref: `${icons.unknownUser}#unknownUser` },
    { withoutLinkName: 'heart', svgHref: `${icons.heart}#heart` },
  ]

  const onPointerUp = () => {
    setIsTouch((prev) => !prev)
  }

  return (
    <div className={styles.root}>
      {!isBurger ? (
        <div className={`${styles.container} container`}>
          <div className={`${styles.left} ${styles.flex}`}>
            <NavLinkCreator clsName={styles.link} navLinks={navLinksLeft} />
          </div>
          <div className={`${styles.center} ${styles.flex}`}>
            <Logotype />
          </div>
          <div className={`${styles.right} ${styles.flex}`}>
            <Search />
            <NavLinkCreator clsName={styles.link} navLinks={navLinksRight} />
          </div>
        </div>
      ) : (
        <div className={`${styles.container} container`}>
            <Logotype />
            <button className={`${styles.burgerButton} ${isTouch && styles.burgerActive}`} onPointerUp={onPointerUp}></button>
            {isTouch && <div className={`${styles.burger}`}>
              <NavLinkCreator clsName={styles.link} navLinks={[...navLinksLeft,...navLinksRight]} />
              <Search />
            </div>}
        </div>
      )}
    </div>
  )
}
