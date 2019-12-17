export  function getRepos(date,page){

    console.log(date+","+page)

     return fetch('https://api.github.com/search/repositories?q=created:%3E'+date+'&sort=stars&order=desc&page=1&per_page=50')
       .then((response) => response.json())
       .catch((error) =>{
         console.error(error);
       })

    }