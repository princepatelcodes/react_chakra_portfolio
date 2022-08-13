import { Tag } from '@chakra-ui/react'
import React from 'react'

export default function FrameworkTag({ skill }) {
    return (
        <Tag colorScheme='blue' fontSize='md' px={4} py={1.5}> {skill}</Tag>
    )
}
