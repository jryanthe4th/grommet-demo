import Head from 'next/head'
import {
  Box,
  Button,
  Carousel,
  Collapsible,
  Grommet,
  Heading,
  Image,
  Layer,
  ResponsiveContext,
  Text,
} from 'grommet'
import { FormClose, Menu } from 'grommet-icons'
import { useState } from 'react'

const theme = {
  global: {
    colors: {
      brand: '',
    },
    font: {
      family: 'Play',
      // size: '18px',
      // height: '20px',
    },
    p: {
      border: 0,
    }
  },
};




const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='xsmall'
    style={{ zIndex: '1' }}
    {...props}
  />
);


export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <Grommet theme={theme} themeMode='dark' full>
      <ResponsiveContext.Consumer>
        {size => (
          <>
          <Head>
          <title>J&J Landscaping</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Play&display=swap" rel="stylesheet" />
        </Head>
          <Box fill>
            <AppBar>
              <Heading level='3' margin='none'>J&J Landscaping</Heading>
              <Button
                icon={<Menu />}
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </AppBar>
            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>

              <Box flex align='center' style={{ lineHeight: 1,}}>
                <Box height="medium" width="large" overflow="hidden">
                  <Carousel play={4000} fill>
                    <Image fit="cover" src="/BackyardPics/IMG-8149.jpg" />
                    <Image fit="cover" src="/BackyardPics/IMG-8153.jpg" />
                    <Image fit="cover" src="/BackyardPics/IMG-8154.jpg" />
                    <Image fit="cover" src="/BackyardPics/IMG-8157.jpg" />
                  </Carousel>
                </Box>
                <Box className='homepage-content'>
                  J&J has over 20 years of experience designing, building, and maintaning residential landscapes.<br/>
                  We specialize in patios, pavers, concrete, irrigation systems, plants, trees, rocks, boulders,<br/>
                  new lawns, firepits, landscape lighting, decorative landscaping rocks, and many other items.<br/>
                  Call or text for free consult and estimate<br/>
                </Box>
              </Box>

                {(!showSidebar || size !== 'small') ? (
                    <Collapsible direction='horizontal' open={showSidebar}>
                    <Box
                      flex
                      width='medium'
                      background='light-2'
                      elevation='small'
                      align='center'
                      justify='center'
                    >
                      sidebar
                    </Box>
                  </Collapsible>
                ): (
                  <Layer>
                    <Box
                      background='light-2'
                      tag='header'
                      align='center'
                      justify='end'
                      direction='row'
                    >
                      <Button
                        icon={<FormClose />}
                        onClick={() => setShowSidebar(false)}
                      />
                    </Box>
                    <Box
                      fill
                      background='light-2'
                      align='center'
                      justify='center'
                    >
                      sidebar
                    </Box>
                  </Layer>
                )}

            </Box>
          </Box>
          </>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}
