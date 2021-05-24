import Head from 'next/head'
import {
  Box,
  Button,
  Carousel,
  Collapsible,
  Grid,
  Grommet,
  Heading,
  Image,
  Layer,
  ResponsiveContext,
  Text,
} from 'grommet'
import { Close, Menu } from 'grommet-icons'
import styled from 'styled-components'
import { useState } from 'react'

const theme = {
  global: {
    colors: {
      brand: '',
    },
    breakpoints: {
      small: {
        value: 600,
      },
      medium: {
        value: 900,
      },
      large: {
        value: 3000,
      },
    },
    font: {
      family: 'Play',
      // size: '18px',
      // height: '20px',
    }
  },
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='xsmall'
    style={{ zIndex: '1', opacity: 1 }}
    {...props}
  />
);

const TextContent = styled.div`
  font-size: 1.5em;
  text-align: center;
  min-height: 25%;
`;

const columns = {
  small: ['auto'],
  medium: ['auto', 'auto', 'auto'],
  large: ['auto', 'auto', 'auto'],
  xlarge: ['auto', 'auto', 'auto'],
};

const rows = {
  small: ['small', 'small', 'small'],
  medium: ['small', 'small', 'small'],
  large: ['small'],
  xlarge: ['small'],
};

const fixedGridAreas = {
  small: [
    { name: 'b1', start: [0, 0], end: [0, 0] },
    { name: 'b2', start: [0, 1], end: [0, 1] },
    { name: 'b3', start: [0, 2], end: [0, 2] },
  ],
  medium: [
    { name: 'b1', start: [0, 0], end: [0, 0] },
    { name: 'b2', start: [1, 0], end: [1, 0] },
    { name: 'b3', start: [2, 0], end: [2, 0] },
  ],
  large: [
    { name: 'b1', start: [0, 0], end: [0, 0] },
    { name: 'b2', start: [1, 0], end: [1, 0] },
    { name: 'b3', start: [2, 0], end: [2, 0] },
  ],
  xlarge: [
    { name: 'b1', start: [0, 0], end: [0, 0] },
    { name: 'b2', start: [1, 0], end: [1, 0] },
    { name: 'b3', start: [2, 0], end: [2, 0] },
  ],
};

const Responsive = ({
  children,
  overrideColumns,
  overrideRows,
  areas,
  ...props
}) => (
  <ResponsiveContext.Consumer>
    {size => {
        let columnsVal = columns;
        if (columns) {
          if (columns[size]) {
            columnsVal = columns[size];
          }
        }

        let rowsVal = rows;
        if (rows) {
          if (rows[size]) {
            rowsVal = rows[size];
          }
        }

        let areasVal = areas;
        if (areas && !Array.isArray(areas)) areasVal = areas[size];

        return (
          <Grid
            {...props}
            areas={!areasVal ? undefined : areasVal}
            rows={!rowsVal ? size : rowsVal}
            columns={!columnsVal ? size : columnsVal}
            className='JR-GridBox'
            style={{ height: '20%', widht: '100%', justify: 'center'}}
          >
            {children}
          </Grid>
        );
      }
    }
  </ResponsiveContext.Consumer>
);




export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <Grommet theme={theme} themeMode='light' full>
      <ResponsiveContext.Consumer>
        {size => (
          <>
          <Head>
          <title>J&J Landscaping</title>
          <link rel='shortcut icon' href='/favicon.ico' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link href='https://fonts.googleapis.com/css2?family=Play&display=swap' rel='stylesheet' />
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

              <Box className='WhatIsThisBox' flex align='center' style={{ minHeight: '100vh' }}>
                {/* <Box height='medium' width='large' overflow='hidden'> */}
                <Box className='Carousel-Container' style={{ minHeight: 300 }}>
                  <Carousel play={5000} fill>
                    <Image fit='cover' src='/BackyardPics/IMG-8149.jpg' />
                    <Image fit='cover' src='/BackyardPics/IMG-8153.jpg' />
                    <Image fit='cover' src='/BackyardPics/IMG-8154.jpg' />
                    <Image fit='cover' src='/BackyardPics/IMG-8157.jpg' />
                  </Carousel>
                </Box>


                  <Responsive
                    rows={rows}
                    columns={columns}
                    gap='small'
                    areas={fixedGridAreas}
                    margin='small'
                  >
                    <Box
                      gridArea='b1'
                      background='light-2'
                      justify='center'
                      align='center'
                      className='box1'
                    >
                      <strong style={{ padding: '10px' }}>J&J has over 20 years of experience designing, building, and maintaning residential landscapes.</strong>
                    </Box>
                    <Box
                      gridArea='b2'
                      background='light-2'
                      justify='center'
                      align='center'
                      className='box2'
                    >
                      <strong style={{ padding: '10px' }}>
                      We specialize in patios, pavers, concrete, irrigation systems, plants, trees, rocks, boulders,
                      new lawns, firepits, landscape lighting, decorative landscaping rocks, and many other items.
                      </strong>
                    </Box>
                    <Box
                      gridArea='b3'
                      background='light-2'
                      justify='center'
                      align='center'
                      className='box3'
                    >
                      <strong style={{ padding: '10px' }}>Call or text for free consult and estimate</strong>
                    </Box>
                  </Responsive>
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
                ) : (
                  <Layer>
                    <Box
                      background='light-2'
                      tag='header'
                      align='center'
                      justify='end'
                      direction='row'
                    >
                      <Button
                        icon={<Close />}
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
