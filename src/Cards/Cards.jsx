
import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import classNames from 'classnames'
import CountUp from 'react-countup';

import './Cards.css'


const Cards = (props) => {


  const { data: { confirmed, recovered, deaths } } = props
  if (!confirmed) {
    return 'Loading...'
  }

  return (

    <Grid container className="cardgrid" spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" >
          <Card className={classNames('cards', 'confirmed')} md={3} xs={12} variant="outlined">


            <Typography className="typo" variant="h5" component="h2" color="textSecondary" gutterBottom>


              <div className="heading">
                Confirmed
              </div>
            </Typography>
            <Typography className="typo" variant="h5" component="h2" color="textSecondary" gutterBottom>

              <div className="counts">

                <CountUp
                  start={0}
                  end={confirmed.value}
                  delay={5}



                />
              </div>

            </Typography>
            <div className="para">
              <p> cases confirmed</p>
            </div>

          </Card>

          <Card className={classNames('cards', 'recovered')} md={3} xs={12} variant="outlined">


            <Typography className="typo" variant="h5" component="h2" color="textSecondary" gutterBottom>
              <div className="heading">
                Recovered
</div>
            </Typography>
            <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
              <div className="counts">

                <CountUp
                  start={0}
                  end={recovered.value}
                  delay={5}



                />
              </div>
            </Typography>
            <div className="para">
              <p> cases recovered</p>
            </div>
          </Card>



          <Card className={classNames('cards', 'death')} md={3} xs={12} variant="outlined">


            <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
              <div className="heading">
                Deaths
</div>

            </Typography>
            <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
              <div className="counts">

                <CountUp
                  start={0}
                  end={deaths.value}
                  delay={5}



                />


              </div>
            </Typography>
            <div className="para">
              <p> deaths</p>
            </div>
          </Card>


        </Grid>
      </Grid>



    </Grid>


  )
}

export default Cards;
