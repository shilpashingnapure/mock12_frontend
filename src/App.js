import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { JobPost } from './Component/JobPost';
import { JobList } from './Component/JobList';

import { useColorMode  , Button, Flex} from '@chakra-ui/react';


function App() {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div className="App">
      <Flex alignItems={'center'} gap='8' justifyContent={'flex-end'} p='3' pl={'5'} pr='5' backgroundColor={'teal'}>
        <Link to='/posting'>Job Post</Link>
        <Link to='/posts'>Job List</Link>
        <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </Flex>
      <Routes>
        <Route path='/posting' element={<JobPost />}></Route>
        <Route path='/posts' element={<JobList />}></Route>
      </Routes>





    </div>
  );
}

export default App;
