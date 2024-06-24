import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='flex justify-center items-center !w-[90%] mx-auto max-ml:h-fi'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost