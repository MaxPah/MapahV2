import React from 'react'

import Grid from '@material-ui/core/Grid';

import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import faArrowUp from FontAwesomeIcon;

const Footer = () => {
    return(
        <footer>
            <Grid container className={'block-footer'}>
                <Grid container item className={'block-footer__top'} xs={12} >
                    <Grid container item className={'block-footer__top--left'} xs={6} md={4} alignContent={'center'}>
                        <a className="block-footer__top--left__logo" href="/">
                            <div className="block-header__part--title">
                                Maxime PAHUD
                            </div>
                        </a>
                    </Grid>

                    <Grid container item className={'block-footer__top--center'} xs={6} md={4}>
                        <div id="block-footer__top--center__link">
                            <a href="/link-1" className="center__link--item">
                                <span>Lien 1</span>
                            </a>
                            <a href="/link-2" className="center__link--item">
                                <span>Lien 2</span>
                            </a>
                            <a href="/link-3" className="center__link--item">
                                <span>Lien 3</span>
                            </a>
                        </div>
                    </Grid>
                    <Grid container item className={'block-footer__top--right'} xs={12} md={4}>
                        <div className={'block-social'}>
                            <a className="block-social__item" href="https://www.instagram.com/maxpah/">
                                <FontAwesomeIcon icon={['fab', 'instagram']} className={'fa-3x'} />
                            </a>
                            <a className="block-social__item" href="https://twitter.com/MaxPah">
                                <FontAwesomeIcon icon={['fab', 'twitter']} className={'fa-3x'} />
                            </a>
                            <a className="block-social__item" href="https://linkedin.com/MaxPah">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} className={'fa-3x'} />
                            </a>
                        </div>
                    </Grid>
                </Grid>
                <Grid container item className={'block-footer__bottom'} xs={12}>
                    <Grid container item className={'block-footer__bottom--right'} xs={12} md={6}>
                        <a className="_tb" href="http://www.maximepahud.fr">Site by maximepahud.fr</a>
                    </Grid>
                    <Grid container item className={'block-footer__bottom--left'} xs={12} md={6}>
                        © Maxime PAHUD 2018
                    </Grid>
                </Grid>
            </Grid>
            <div className={'go-to-top'}>
                <FontAwesomeIcon icon='arrow-up'  className={'fa-2x'}/>
            </div>
        </footer>
    )
};

export default Footer;