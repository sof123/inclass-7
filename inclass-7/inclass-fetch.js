// Inclass Fetch Exercise
// ======================
//
// Navigate to https://webdev-dummy.herokuapp.com/sample
//
// This endpoint returns a list of articles.  Your assignment is to
// write a function countWords that uses fetch() to query the endpoint,
// and return a map from the article id to the number of words in the
// article's text.
//
// Also write two "helper" functions that call this initial function.
//
// If there are any exceptions then fetch() will throw an error.
// Provide a "safe" version of the countWords function that always
// returns a map, which will be empty in the case of errors.
//
// Finally, write a function that returns the article id with the
// most number of words.
//
// Below I have provided you a template, you just need to fill in
// the implementation.
//
// Navigate to mocha-inclass-fetch.html to see if your implementation
// provides the expected results.
//

var articlesObject;

(function(exports) {

    'use strict'
	

    function countWords(url) {
        return getArticlesObject(url);
		
    }

    function countWordsSafe(url) {
		return getArticlesObject(url);
		
    }

    function getLargest(url) {
		return getArticlesObjectHighest(url);
        throw new Error('Implement me!')
    }

    exports.inclass = {
        author: "Simi",
        countWords, countWordsSafe, getLargest
    }

})(this);

function getArticlesObject(url)
{
	
	return fetch(url).then(  
		function(response) { 
		
		  if (response.status !== 200 && response.status != 404) {  
			console.log('Looks like there was a problem. Status Code: ' +  
			  response.status);  
			  console.log(err);
			return err;  
		  }
		 

		  return response.json().then(function(data) { 
			  articlesObject = data;
			  var articleMap = {};
			  var articlesArray = articlesObject.articles;
			  for (var i = 0; i < articlesArray.length;i++)
			  {
				  var articleId = articlesArray[i]._id;
				  var articleText = articlesArray[i].text;
				  articleMap[articleId] = countWords(articleText);
			  }
			  console.log(articleMap);
			  return articleMap;
		  });  
		}  
  )  
  .catch(function(err) {  
   return err;
   console.log('Fetch Error :-S', err);  
  });
}

function getArticlesObjectHighest(url)
{
	
	return fetch(url).then(  
		function(response) {  
		  if (response.status !== 200) {  
			console.log('Looks like there was a problem. Status Code: ' +  
			  response.status);  
			return {};  
		  }

		  return response.json().then(function(data) { 
			  articlesObject = data;
			  var articleMap = {};
			  var articlesArray = articlesObject.articles;
			  for (var i = 0; i < articlesArray.length;i++)
			  {
				  console.log(articlesArray[i]);
				  var articleId = articlesArray[i]._id;
				  var articleText = articlesArray[i].text;
				  articleMap[articleId] = countWords(articleText);
			  }
			  console.log(articleMap);
			  var max = 0;
			  var maxId = 0;
			  for (var i in articleMap)
			  {
				  if (articleMap[i] > max)
				  {
					  max = articleMap[i];
					  maxId = i;
					  
				  }
			  }
			  
			 return maxId;
		  });  
		}  
  )  
  .catch(function(err) {  
   return err;
   console.log('Fetch Error :-S', err);  
  });
}

function countWords(str) {
  return str.split(/\s+/).length;
}


