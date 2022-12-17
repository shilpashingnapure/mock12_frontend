import { useEffect } from "react"
import { useState } from "react"
import { Avatar, Box, Flex, Heading, Input, Select, Tag ,Button, Spacer} from '@chakra-ui/react'
import { Filter } from "./Filter"
import { Search } from "./Search"

export const JobList = ()=>{

    const [loading , setloading] = useState(true)
    const [data , setData] = useState([])
    const [TotalPages , setTotalPage] = useState(1)

    useEffect(()=>{
        getAPiCall(`https://mock12-backend-js08.onrender.com/getposts`)
    } , [])

    async function getAPiCall(url){
        let res = await fetch(url)
        let response = await res.json()
        setloading(false)
        setData(response.JobPost)
        console.log(response)
        setTotalPage(data.TotalPage)

    }

    function handleFilter(value){
        if(value != ''){
            getAPiCall(`https://mock12-backend-js08.onrender.com/getposts?filter=${value}`)
            console.log(value)
        }else{
            getAPiCall(`https://mock12-backend-js08.onrender.com/getposts`)
        }
    }

    function handleSort(value){
        if(value == 'dec'){
            getAPiCall(`https://mock12-backend-js08.onrender.com/getposts?sort=dec`)
        }else{
            getAPiCall(`https://mock12-backend-js08.onrender.com/getposts?sort=asec`)
        }

    }

    function handleSearch(value){
        let searchData = getAPiCall(`https://mock12-backend-js08.onrender.com/getposts?q=${value}`)
    }

    if(loading){
        return <div>loading ...</div>
    }


    return <div>
        <Flex gap='4'  p='5' pl='200px'>
            <Filter  handleFilter={handleFilter}/>
            <Select width='10%' onChange={(e)=>handleSort(e.target.value)}>

                <option value='asec'>oldest to latest</option>
                <option value='dec'>latest to oldest</option>
            </Select>
            <Spacer/>
            <Search  handleSearch={handleSearch}/>
        </Flex>
        {data.length == 0 ? <div>not result found</div> : data.map((job)=>{
            return <Flex className="card" alignItems={'center'} >
                <Flex gap='4' alignItems={'center'}>
                    <Avatar size='xl' src='https://www.shutterstock.com/image-illustration/mockup-3d-logo-facade-sign-260nw-2046330740.jpg'></Avatar>
                    <Box lineHeight={'45px'}>
                        <span>{job.company}</span>
                        <Heading as='h3' size='md'>{job.position}</Heading>
                        <Flex gap='5'>
                            <p>{job.createdAt.slice(0,10)} </p>
                            <p>{job.contract}</p>
                            <p> {job.location}</p>
                        </Flex>
                    </Box>
                </Flex>
                <Flex gap='5'>
                    <Tag size={'md'}  >{job.role}</Tag>
                    <Tag size={'md'}  >{job.level}</Tag>
                    <Tag size={'md'}  >{job.language}</Tag>
                </Flex>
            </Flex>
        })}
    </div>
}