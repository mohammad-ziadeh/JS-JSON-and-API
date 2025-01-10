console.log("8-");
//##################################Task 8########################################
{
  const fetchData = fetch("https://api.github.com/users/mohammad-ziadeh/repos");
  fetchData
    .then((response) => {
      if (!response.ok) {
        throw "I can't fetch the data";
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((repo) => {
        console.log(repo.name);
      });
    });
}
