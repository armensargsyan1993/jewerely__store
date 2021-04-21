
import { Container } from '@material-ui/core'
import React, { FC } from 'react'
import { icons } from '../assets'
import { Logotype } from '../Logotype/Logotype'
import { INavLinkCreatorPropsNavLinks, NavLinkCreator } from '../NavLinkCreator/NavLinkCreator'
import { Search } from '../Search/Search'
import styles from './Navbar.module.scss'

export const Navbar:FC = () => {

    const navLinksLeft:Array<INavLinkCreatorPropsNavLinks> = [
        {link:'contractors'},
        {link:'designers'},
        {link:'vacancies'}
    ]

    const navLinksRight:Array<INavLinkCreatorPropsNavLinks> = [
        {link:'login/register'},
        {withoutLinkName:'profile',svgHref:`${icons.unknownUser}#unknownUser`}
    ]

    return (
        <div className={styles.root}>
            <Container maxWidth="sm">
                <NavLinkCreator navLinks={navLinksLeft}/>
                <Logotype/>
                <Search/>
                <NavLinkCreator navLinks={navLinksRight}/>
            </Container>
        </div>
    )
}
