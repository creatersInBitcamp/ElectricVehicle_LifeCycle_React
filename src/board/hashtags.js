import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {GridList, GridListTile} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450
    }
}))
const Hashtags = ({posts}) => {
    const classes = useStyles()
    return (
        <article className="contents">
            <div className={classes.root}>
                <GridList className={classes.gridList} cellHeight={160} cols={3}>
                    {posts.map( post => (
                        <GridListTile key={post.img} cols={1}>
                            <img src={post.img} alt={post.userId}/>
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </article>
    );
};

export default Hashtags;