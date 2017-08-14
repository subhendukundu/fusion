import Layout from './components/Layout'
import Link from 'next/link'
import Button from '../fusion/Button';
import Avatar from '../fusion/Avatar';
import Alert from '../fusion/Alert';
import Banner from '../fusion/Banner';


import { ThemeProvider, withTheme } from 'theming'
import theme from '../fusion/themes'

import Heading from '../fusion/Heading';
import Row from '../fusion/Row';
import Logo from '../fusion/Logo';
import BackgroundImage from '../fusion/BackgroundImage';


const KitchenSink = (props) => (
  <Layout>
    <ThemeProvider theme={theme}>
     <div>
     <h2>Background Image</h2>
        <BackgroundImage />
     <Row />
     <hr />

     <h2>Logo</h2>
        <Logo src="https://emotion.sh/a76dfa0d18a0536af9e917cdb8f873b9.png" alt="fusion logo" />
     <Row />
     <hr />

      <h2>Heading</h2>
      <Heading></Heading>
     <Row />
     <hr />

     <h2>Button </h2>
     <Button>I'm a button</Button> 
     <Row />
     <hr />

     <h3>Avatar</h3>
     <Avatar src="http://www.spaceandmotion.com/Images/albert-einstein-theory-general-relativity.jpg" ></Avatar>
       <hr /> 
        
       <h2>Alert </h2>
     <Alert>There was a problem rendering this box</Alert> 
     <Row />
     <hr />

     <h2>Banner </h2>
     <Banner src ="http://lorempixel.com/560/150/sports" />
     <Row />
     <hr />
     </div>
     </ThemeProvider>
  </Layout>
)

export default KitchenSink