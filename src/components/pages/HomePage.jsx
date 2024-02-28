import React, { useCallback, useEffect, useState } from "react";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import Repos from "../Repos/Repos";
import Search from "../Search/Search";
import SortRepos from "../SortRepos/SortRepos";
import toast from "react-hot-toast";
// import Spinner from "../Spinner/Spinner";
import Spinner from './../Spinner/Spinner';

const HomePage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState('recent');

  const getUserProfileRepo = useCallback(async () => {
    setLoading(true);
    try {
      const userRes = await fetch('https://api.github.com/users/IamRazzakk');
      if (!userRes.ok) {
        throw new Error('Failed to fetch user data');
      }
      const userProfile = await userRes.json();
      setUserProfile(userProfile);

      const repoRes = await fetch(userProfile.repos_url);
      if (!repoRes.ok) {
        throw new Error('Failed to fetch user repositories');
      }
      const repos = await repoRes.json();
      setRepos(repos);

      console.log("userProfile:", userProfile);
      console.log("Repos:", repos);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUserProfileRepo();
  }, [getUserProfileRepo]);

  return (
    <div className='m-4'>
      <Search />
      <SortRepos />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
          {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
          {
            repos.length > 0 && !loading && <Repos repos={repos} />
          }
          {
            loading && <Spinner />
          }
        </div>
      )}
    </div>
  );
}

export default HomePage;