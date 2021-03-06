import Indicators from "../components/Indicators"
import Values from "../components/Values"
import Spectogram from "../components/Spectogram"
import Histogram from "../components/Histogram"
import Title from "../components/Title"
import Velocity from "../components/Velocity"
import Box from '@mui/material/Box';


const boxStyleCols = (height, width, inlineBlock = true) => {
  return {
    width: width,
    height: height,
    display: inlineBlock ? 'inline-block' : null,
    p: 1,
    mx: 1,
    bgcolor: (theme) =>
      theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
    color: (theme) =>
      theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
    border: '1px solid',
    borderColor: (theme) =>
      theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
    borderRadius: 2,
    fontSize: '0.875rem',
    fontWeight: '700',
    textAlign: 'center',
  }
}

const boxStyleRow = (height) => {
  return ({
    // width: '25%',
    height: height,
    p: 1,
    bgcolor: (theme) =>
      theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
    color: (theme) =>
      theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
    border: '1px solid',
    borderColor: (theme) =>
      theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
    borderRadius: 2,
    fontSize: '0.875rem',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '10px',
  })
}

const Home = () => {
  return (
    <div>
      <Box sx={{ height: '67px', width: '99%', padding: '10px' }}>
        <Title />
      </Box>
      <Box sx={{ height: '850px', width: '100%', display: 'flex' }}>

        <Box sx={boxStyleCols("100%", "50%")}>

          <Box sx={boxStyleRow("60%")}>
            <Histogram />
          </Box>

          <Box sx={boxStyleRow("34%")}>
            <Velocity />
          </Box>

        </Box>

        <Box sx={boxStyleCols("100%", "50%")}>
          <Box sx={boxStyleRow("40%")}>
            <Values />
          </Box>

          <Box sx={boxStyleRow("35%")}>
            <Spectogram />
          </Box>

          <Box sx={boxStyleRow("15%")}>
            <Indicators />
          </Box>
        </Box>
      </Box>
    </div>
  )
}


export default Home;