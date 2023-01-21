import CategoryDirectory from "../../components/category-directory/category-directory.component"




import { Outlet } from 'react-router-dom';



const Home = () => {
  return (
    <div>
      <CategoryDirectory />
      <Outlet />
    </div>
  );
};

export default Home;