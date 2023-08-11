import { BrowserRouter, Routes, Route } from 'react-router-dom'
// matirial ui used here for html tags
import { Box } from '@mui/material'

import { Feed, VideoDetail, ChannelDetail, SearchFeed,Navbar } from './components'

const App = () => (
  <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/Channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App  // export the App component