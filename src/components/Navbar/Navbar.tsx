import { Container } from '@material-ui/core'
import React, { FC } from 'react'
import { icons } from '../assets'
import { Logotype } from '../Logotype/Logotype'
import {
  INavLinkCreatorPropsNavLinks,
  NavLinkCreator,
} from '../NavLinkCreator/NavLinkCreator'
import { Search } from '../Search/Search'
import styles from './Navbar.module.scss'

export const Navbar: FC = () => {
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

  return (
    <div className={styles.root}>
      <Container className={styles.container} maxWidth="sm">
        <div className={styles.left}>
          <NavLinkCreator navLinks={navLinksLeft} />
        </div>
        <div className={styles.center}>
          <Logotype />
        </div>
        <div className={styles.right}>
          <Search/>
          <NavLinkCreator navLinks={navLinksRight} />
        </div>
      </Container>
    </div>
  )
}