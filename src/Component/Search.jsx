import { Box, Input,Button, Flex} from '@chakra-ui/react'
import { useState } from 'react'

export const Search = ({handleSearch})=>{
    const [search , setsearch] = useState('')

    return <>
        <Flex gap='3' className='search' >
            <Input onChange={(e)=> setsearch(e.target.value)} type='text' placeholder="search the tech stack" width={'30%'}/>
            <Button  onClick={()=> handleSearch(search)}>search</Button>
        </Flex>
    </>
}