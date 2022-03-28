import { useEffect, useState }  from "react";

export const useGithubUser = (userId) => {
  const [state, setState] = useState({
    data: null,
    error: null,
    isLoading: true,
  });
  
  useEffect(() => {
      fetch(`https://api.github.com/users/${userId}`)
          .then(res => {
              if (res.ok) {
                  return res.json();
              }

              throw new Error();
          })
          .then(userData => {
            setState({
              data: userData,
              error: null,
              isLoading: false,
            });
          })
          .catch(err => {
            setState({
              data: null,
              error: err,
              isLoading: false,
            });
          });
  }, [userId]);

  return state;
};