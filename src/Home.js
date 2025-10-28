import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    
    // We can rename 'data' to 'blogs'
    const { data: blogs, isPending, error } = useFetch('https://react-json-bprp.onrender.com');

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading... </div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
        </div>
     );
}
 
export default Home;