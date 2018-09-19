import React from 'react'
import NavBar from "../NavBar/NavBar";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import Header from "./../Header/Header.jsx";
import Button from "./../CustomButton/Button.jsx";

const CustomHeader = () => {
    return(
        <header>

            <Header
                brand="Transparent"
                color="transparent"
                rightLinks={
                    <List className={'classes.list'}>
                        <ListItem className={'classes.listItem'}>
                            <Button
                                color="transparent"
                                className={
                                    'classes.navLink' + " " + 'classes.socialIconsButton'
                                }
                            >
                                <i
                                    className={
                                        'classes.socialIcons' +
                                        " " +
                                        'classes.marginRight5' +
                                        " fab fa-twitter"
                                    }
                                />{" "}
                                Twitter
                            </Button>
                        </ListItem>
                        <ListItem className={'classes.listItem'}>
                            <Button
                                color="transparent"
                                className={
                                    'classes.navLink' + " " + 'classes.socialIconsButton'
                                }
                            >
                                <i
                                    className={
                                        'classes.socialIcons' +
                                        " " +
                                        'classes.marginRight5' +
                                        " fab fa-facebook"
                                    }
                                />{" "}
                                Facebook
                            </Button>
                        </ListItem>
                        <ListItem className={'classes.listItem'}>
                            <Button
                                color="transparent"
                                className={
                                    'classes.navLink' + " " + 'classes.socialIconsButton'
                                }
                            >
                                <i
                                    className={
                                        'classes.socialIcons' +
                                        " " +
                                        'classes.marginRight5' +
                                        " fab fa-instagram"
                                    }
                                />{" "}
                                Instagram
                            </Button>
                        </ListItem>
                    </List>
                }
            />
        </header>
    )
};

export default CustomHeader;