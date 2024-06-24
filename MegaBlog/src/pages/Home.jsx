import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import { useSelector } from 'react-redux';
import {PostCard,Hero,Container} from '../components/index';

function Home() {
    const [Posts, setPosts] = useState([]);
    const authStatus=useSelector((state)=>state.auth.status)
    useEffect(() => {
      appwriteService.getPosts().then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      });
    }, []);
  
    if (Posts.length === 0 && authStatus ) {
      return (
        <Container classname="flex justify-around items-center">
          <h1 className="text-4xl max-ml:text-center">You Didn't Post AnyThing</h1>
        </Container>
      );
    } 
  
    if(authStatus) {
      return (
        <Container>
          <div className="flex flex-wrap w-[90%] mx-auto h-full overflow-y-scroll no-scrollbar ">
            {Posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4 max-ml:w-full">
                <PostCard {...post} />
              </div>
            ))}
            {/* <h1>{authStatus}</h1> */}
          </div>
        </Container>
      );
    }
    else{
      return (
        <Container classname="flex justify-around items-center max-ml:flex-col ">
          <Hero />
        </Container>
      );
    }
}


export default  Home;