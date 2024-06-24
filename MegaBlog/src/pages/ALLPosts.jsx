import React, {useState, useEffect} from 'react'
import { Container} from '../components'
import PostCard from '../components/PostCard';
import appwriteService from "../appwrite/config";

function ALLPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  
    if(posts.length === 0) return <Container classname="flex justify-center items-center"><h1 className='text-8xl'>You have Not Post Anything.</h1></Container>
    else return ( <Container classname="flex flex-wrap !w-[90%] mx-auto overflow-y-scroll no-scrollbar max-ml:h-fit" >
      
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4 max-ml:w-full h-fit">
              <Card {...post}/>
            </div>
          ))}
        
    </Container>  
  )
}

export default ALLPosts