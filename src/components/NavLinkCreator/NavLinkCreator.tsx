import React from 'react'
import { NavLink } from 'react-router-dom'
import { SvgCreator } from '../SvgCreator/SvgCreator'
import styles from './NavLinkCreator.module.scss'

interface INavLinkCreatorProps {
  navLinks: Array<INavLinkCreatorPropsNavLinks>,
  clsName?:string
}
export interface INavLinkCreatorPropsNavLinks {
  link?: string
  svgHref?: string,
  withoutLinkName?:string
}

export const NavLinkCreator: React.FC<INavLinkCreatorProps> = ({
  clsName = '',
  navLinks,
}) => {
  return (
    <>
      {navLinks.map((e) => {
        return (
          <div key={`${e.withoutLinkName ? e.withoutLinkName : e.link}`} className={styles.root}>
            <NavLink
              className={styles.link + ' ' + clsName}
              to={`/${!e.withoutLinkName ? e?.link?.slice().replace(/\s/g, '').replace('/', '') : e.withoutLinkName}`}
              activeClassName={styles.activeClassName}
            >
              {e.svgHref && (
                <SvgCreator clsName={styles.svg} svgHref={e.svgHref} />
              )}
              {e.link && <span>{e.link}</span>}
            </NavLink>
          </div>
        )
      })}
    </>
  )
}
