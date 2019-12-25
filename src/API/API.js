/*export  function getRepos(date,page){

    console.log(date+","+page)

     return fetch('https://api.github.com/search/repositories?q=created:%3E'+date+'&sort=stars&order=desc&page=1&per_page=50')
       .then((response) => response.json())
       .catch((error) =>{
         console.error(error);
       })

    }

*/
export const REPOS_URL='https://api.github.com/search/repositories?q=created:%3E';

export const REPOS_OPT_URL='&sort=stars&order=desc&per_page=50&page=';

//api returns only top 1000 items
//fixed number of items per page to 50
//totale number of pages  1000/50 = 20
//on page 21 no items are recived