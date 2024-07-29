
import React from 'react';
import Post from './postcontent';
import Searchfallow from './Searchfallow';

const PostsPage = () => {
  return (
    <div className="p-6 flex-1 overflow-auto">

     <Searchfallow/>
     <Post/>
    </div>
  );
};

export default PostsPage ;
