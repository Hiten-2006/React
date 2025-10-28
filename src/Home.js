import BlogList from './BlogList';
import useFetch from './useFetch'; // 1. Import the custom hook

const Home = () => {
    
    // 2. Use the hook to get data and state
    //    We can rename 'data' to 'blogs'
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading... </div> }
            {/* 3. Use 'blogs' just like before */}
            { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
        </div>
     );
}
 
export default Home;