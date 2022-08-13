import { Tag } from '@chakra-ui/react'
import React from 'react'

export default function ToolTag({ skill }) {
    return (
        <Tag colorScheme='teal' fontSize='md' px={4} py={1.5}> {skill}</Tag>
    )
}
