import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './Category.css'


const useStyles = makeStyles({
  card: {
    width: '20vw',
  },
  media: {
    height: 140,
  },
  mobilecard: {
    width: '50vw',
    marginBottom: 40
  },


});


/**
 * @param  {string} categoryNumber
 * @param  {array} data
 * @param  {function} onClick
 * 
 * function displays the cards from the database
 */
const Category = ({ categoryNumber, data, onClick }) => {



  const matches = useMediaQuery('(min-width:600px)');

  const classes = useStyles();


  return (
    <div>
      <h2 id="heading">{categoryNumber} Question</h2>
      <div className="image-grid">

        {data.map(item => (
          <Card key={item.id} className={matches ? classes.card : classes.mobilecard}>
            <CardActionArea onClick={onClick}>
              <CardMedia
                className={classes.media}
                image={item.url}
                title={item.title}
                id={item.id}
              />
              <CardContent>

                <Typography variant="body2" color="textSecondary" component="p">
                  {item.title}
                </Typography>
              </CardContent>
            </CardActionArea>

          </Card>
        ))}



      </div>

    </div>
  )
}

export default Category;