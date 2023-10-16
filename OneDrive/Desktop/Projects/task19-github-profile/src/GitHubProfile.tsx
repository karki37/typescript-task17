import { useEffect, useState } from "react";
import { IProfileCard } from "./ProfileCard";
import { IRepository } from "./RepositoryList";
import styles from "./GitHubProfile.module.css"

function GitHubProfile() {
  const [profile, setProfile] = useState<IProfileCard | null>(null);
  const [repositories, setRepositories] = useState<IRepository[] | null>(null);
  const [loading, setLoading] = useState(true);
 // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/karki37"
        );
        const profileData: IProfileCard = await response.json();
        setProfile(profileData);

        const repoResponse = await fetch(
          `https://api.github.com/users/karki37/repos`
        );

        const repoData: IRepository[] = await repoResponse.json();
        setRepositories(repoData);

        setLoading(false);
      } catch (error) {
       // setError(error);
         setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

 // if (error) {
  //  return <div>Error: {error}</div>;
 // }

  return (
    <div className={styles.profileContainer}>
      {profile && (
        <div className={styles.profile}>
          <img src={profile.avatar_url} alt={`${profile.login}'s Avatar`} />
          <h2>{profile.login}</h2>
          <p>{profile.bio}</p>
        </div>
      )}
  
      {repositories && (
        <div className={styles.repositories}>
          <h2>Repositories</h2>
          <ul>
            {repositories.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url}>{repo.name}</a>
                <p>{repo.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

  );
            }
  

 export default GitHubProfile;
