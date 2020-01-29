import React, { Component } from 'react';

import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton  } from 'react-mdl';


class About extends Component {
  render() {
    return(
      <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>About Me</CardTitle>
    <CardText>
    Lorem ipsum dolor sit amet
Excepteur et pariatur officia veniam anim culpa cupidatat consequat ad velit culpa est non.
Nisi qui nisi duis commodo duis reprehenderit consequat velit aliquip.
Dolor consectetur incididunt in ipsum laborum non et irure pariatur excepteur anim occaecat officia sint.
Lorem labore proident officia excepteur do.
Sit qui est voluptate proident minim cillum in aliquip cupidatat labore pariatur id tempor id. Proident occaecat 
occaecat sint mollit tempor duis dolor cillum anim. Dolore sunt ea mollit fugiat in 
aliqua consequat nostrud aliqua ut irure in dolore. Proident aliqua culpa sint sint exercitation. 
Non proident occaecat reprehenderit veniam et proident dolor id culpa ea tempor do dolor. 
Nulla adipisicing qui fugiat id dolor. Nostrud magna voluptate irure veniam veniam labore 
ipsum deserunt adipisicing laboris amet eu irure. Sunt dolore nisi velit sit id. 
Nostrud voluptate labore proident cupidatat enim amet Lorem officia magna excepteur occaecat eu qui. 
Exercitation culpa deserunt non et tempor et non.

    </CardText>
    <CardActions border>
        <Button colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
    )
  }
}

export default About;
