import { FormControl, FormLabel, Heading, Input, Select } from "@chakra-ui/react"


export const JobPost = ()=>{

    function handleData(e){
        e.preventDefault()
        let temp = e.target
        let data = {}
        for(let i = 0 ; i < temp.length-1 ; i++){
            data[temp[i].name]  =  temp[i].value.toLowerCase()
        }
        console.log(data)
        fetch('https://mock12-backend-js08.onrender.com/jobpost' , {
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res)=>{

            return res.json()
        }).then((res)=>{
            alert('suffuly added')
            console.log(res)
        }).catch((err)=>{
            alert('error occuer')
        })

    }
    return <div>
        <Heading textAlign={'center'} m='2'>Job Posting Page</Heading>
        <form onSubmit={(e)=>handleData(e)}>
            <FormControl >
                <FormLabel>Company Name</FormLabel>
                <Input name='company' type='text' placeholder="enter company name"/>
            </FormControl>
            <FormControl>
                <FormLabel>City</FormLabel>
                <Input type='text' name='city' placeholder="city name"/>
            </FormControl>
            <FormControl>
                <FormLabel>Location</FormLabel>
                <Input type='text' name='location' placeholder="location"/>
            </FormControl>
            <FormControl>
                <FormLabel>Role</FormLabel>
                <Select name='role'>
                    <option value='Frontend'>Frontend</option>
                    <option value='Backend'>Backend</option>
                    <option value='FullStack'>FullStack</option>
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel>Level</FormLabel>
                <Select name='level'>
                    <option value='Junior'>Junior</option>
                    <option value='Senior'>Senior</option>
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel>Position</FormLabel>
                <Input type='text' name='position' placeholder="position"/>
            </FormControl>
            <FormControl>
                <FormLabel>Language</FormLabel>
                <Input type='text' name='language' placeholder="language"/>
            </FormControl>
            <FormControl>
                <FormLabel>Contract</FormLabel>
                <Select name='contract'>
                    <option value='full time'>full time</option>
                    <option value='part time'>part time</option>
                </Select>
            </FormControl>
            <Input backgroundColor={'teal'} type='submit' value='submit'/>

        </form>
    </div>
}