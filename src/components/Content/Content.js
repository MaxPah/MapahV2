import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import myimage from '../../assets/img/trieves-panorama.jpg';

import './Content.css';

const Content = () => {
    // const { classes } = props;

    const featuredPosts = [
        {
            title: 'Featured post',
            date: 'Nov 12',
            description:
                'This is a wider card with supporting text below as a natural lead-in to additional content.',
        },
        {
            title: 'Post title',
            date: 'Nov 11',
            description:
                'This is a wider card with supporting text below as a natural lead-in to additional content.',
        },
    ];

    return(
        <div>
            <div className={'parallax'} />
            <Grid container spacing={8} className={'main'} >
                <Grid container spacing={24} className={'block-interest'}>
                    <Grid item xs>
                        <Card className={'card__item'}>
                            <CardActionArea>
                                <CardMedia
                                    className={'card-media'}
                                    image={myimage}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="headline" component="h2">
                                        Lorem 1
                                    </Typography>
                                    <Typography component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card className={'card__item'}>
                        <CardActionArea>
                            <CardMedia
                                className={'card-media'}
                                image={myimage}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    Lorem 2
                                </Typography>
                                <Typography component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs>
                        <Card className={'card__item'}>
                        <CardActionArea>
                            <CardMedia
                                className={'card-media'}
                                image={myimage}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    Lizard
                                </Typography>
                                <Typography component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container style={{ padding: 50}} spacing={24} className={'main'} >
                {/* Main featured post */}
                <Paper className={'toto'}>
                    <Grid container>
                        <Grid item md={6}>
                            <div className={'toto'}>
                                <Typography variant="display2" color="inherit" gutterBottom>
                                    Title of a longer featured blog post
                                </Typography>
                                <Typography variant="headline" color="inherit" paragraph>
                                    Multiple lines of text that form the lede, informing new readers quickly and
                                    efficiently about what&apos;s most interesting in this post&apos;s contents.
                                </Typography>
                                <Typography variant="title" color="inherit">
                                    Continue reading...
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
                {/* End main featured post */}
                {/* Sub featured posts */}
                <Grid container spacing={40} className={'toto2'}>
                    {featuredPosts.map(post => (
                        <Grid item key={post.title} spacing={12} xs={6} md={6}>
                            <Card className={'toto3'}>
                                <div className={'toto4'}>
                                    <CardContent>
                                        <Typography variant="headline">{post.title}</Typography>
                                        <Typography variant="subheading" color="textSecondary">
                                            {post.date}
                                        </Typography>
                                        <Typography variant="subheading" paragraph>
                                            {post.description}
                                        </Typography>
                                        <Typography variant="subheading" color="primary">
                                            Continue reading...
                                        </Typography>
                                    </CardContent>
                                </div>
                                <Hidden xsDown>
                                    <CardMedia
                                        className={'toto5'}
                                        image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                                        title="Image title"
                                    />
                                </Hidden>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <div className={'parallax-2'} />
        </div>
    )
};

export default Content;
