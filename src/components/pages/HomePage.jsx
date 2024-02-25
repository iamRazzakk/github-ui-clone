import ProfileInfo from "../ProfileInfo/ProfileInfo"
import Repos from "../Repos/Repos"
import Search from "../Search/Search"
import SortRepos from "../SortRepos/SortRepos"
import Spinner from "../Spinner/Spinner"



const HomePage = () => {
  return (
    <div className='m-4'>
      <Search />
      <SortRepos />
      <div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
        <ProfileInfo />
        <Repos />
        <Spinner />
      </div>
    </div>
  )
}

export default HomePage
