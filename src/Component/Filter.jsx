import { Select } from "@chakra-ui/react"

export const Filter = ({handleFilter})=>{

    return <>
        <Select onChange={(e)=>handleFilter(e.target.value)} width='10%'>
            <option value=''>Roles</option>
            <option value='fullstack'>FullStack</option>
            <option value='frontend'>Frontend</option>
            <option value='backend'>Backend</option>
        </Select>
    </>
}