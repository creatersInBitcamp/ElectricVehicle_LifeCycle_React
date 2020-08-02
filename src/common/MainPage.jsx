import React from 'react';
import Card from "@material-ui/core/Card";
import {ButtonGroup, CardContent, CardHeader, CardMedia, Grid} from "@material-ui/core";
import img from '../assets/images/2.jpg'
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import logo from '../assets/images/icon/logo.jpeg'
import back from '../board/imgs/elecvehicle.jpg'

const useStyles = makeStyles((theme) => ({
    cover: {

    },
    logo: {
      width: '170px',
      height: '100px'
    },
    header: {
        height: '200px'
    },
    body: {
      height: '600px',
        backgroundImage: "none"
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
    },
}))

const MainPage = () => {
    const classes = useStyles()
    return (
        <div>
         <header className={classes.header}>
             <Grid container>
                 <Grid item xs/>
                 <Grid item xs={2}>
                     <div className={classes.buttonGroup}>
                         <ButtonGroup variant="text" aria-label={"text primary button group"}>
                             <Button>Sign-In</Button>
                             <Button>Sign-Up</Button>
                         </ButtonGroup>
                     </div>
                 </Grid>
             </Grid>
             <Grid container alignItems="center">
                 <Grid item xs/>
                 <Grid item xs={3}>
                     <div>
                         <img className={classes.logo} src={logo} alt="logo"/>
                     </div>
                 </Grid>
                 <Grid item xs/>
             </Grid>
             <div className={classes.cover}>

             </div>
         </header>
         <body className={classes.body}>
         <Grid container alignItems="center">
             <Grid xs/>
             <Grid item xs={10}>
                 <Grid container spacing={2}>
                     <Grid item xs={3}>
                         <Card variant="outlined" className={classes.card}>
                             <CardHeader title="신차"/>
                             <CardMedia className={classes.media} image={img} title="저공해차랑"/>
                             <CardContent>
                                 <ButtonGroup
                                     fullWidth={true}
                                     orientation="vertical"
                                     aria-label="vertical contained button group"
                                     variant={"text"}
                                     size="large">
                                     <Button>신차 보기</Button>
                                     <Button>등록 비용</Button>
                                 </ButtonGroup>
                             </CardContent>
                         </Card>
                     </Grid>
                     <Grid item xs={3}>
                         <Card variant="outlined" className={classes.card}>
                             <CardHeader title="중고차"/>
                             <CardMedia className={classes.media} image={img} title="저공해차랑"/>
                             <CardContent>
                                 <ButtonGroup
                                     fullWidth={true}
                                     orientation="vertical"
                                     aria-label="vertical contained button group"
                                     variant={"text"}
                                     size="large">
                                     <Button>중고 보기</Button>
                                     <Button>폐차 안내</Button>
                                 </ButtonGroup>
                             </CardContent>
                         </Card>
                     </Grid>
                     <Grid item xs={3}>
                         <Card variant="outlined" className={classes.card}>
                             <CardHeader title="지도"/>
                             <CardMedia className={classes.media} image={img} title="저공해차랑"/>
                             <CardContent>
                                 <ButtonGroup
                                     fullWidth={true}
                                     orientation="vertical"
                                     aria-label="vertical contained button group"
                                     variant={"text"}
                                     size="large">
                                     <Button>충전소 찾기</Button>
                                     <Button>관광지 찾기</Button>
                                 </ButtonGroup>
                             </CardContent>
                         </Card>
                     </Grid>
                     <Grid item xs={3}>
                         <Card variant="outlined" className={classes.card}>
                             <CardHeader title="게시판"/>
                             <CardMedia className={classes.media} image={img} title="저공해차랑"/>
                             <CardContent>
                                 <ButtonGroup
                                     fullWidth={true}
                                     orientation="vertical"
                                     aria-label="vertical contained button group"
                                     variant={"text"}
                                     size="large">
                                     <Button>최신 글</Button>
                                     <Button>인기 글</Button>
                                 </ButtonGroup>
                             </CardContent>
                         </Card>
                     </Grid>
                 </Grid>
             </Grid>
             <Grid xs/>
         </Grid>
         </body>
        </div>
    );
};

export default MainPage;