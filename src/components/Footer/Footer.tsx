import React from 'react'
import { FooterTitle } from '../FooterTitle/FooterTitle'
import { NavLinkCreator } from '../NavLinkCreator/NavLinkCreator'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.top}>
          <FooterTitle title={`useful links`}>
              {/* <NavLinkCreator> */}
          </FooterTitle>
        </div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  )
}

{/* 
const navLinksLeft: Array<INavLinkCreatorPropsNavLinks> = [
    { link: 'contractors' },
    { link: 'designers' },
    { link: 'vacancies' },
  ]

  const navLinksRight: Array<INavLinkCreatorPropsNavLinks> = [
    { link: 'login/register' },
    { withoutLinkName: 'profile', svgHref: `${icons.unknownUser}#unknownUser` },
    { withoutLinkName: 'heart', svgHref: `${icons.heart}#heart` },
  ] */}
