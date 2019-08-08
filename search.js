/* global $, api, store */
'use strict';

const search = (function() {


  /**
   * Receive username from input search and send to api module  
   * 
   */
  const handleSearchInput = function() {
    $('#search-form').submit('.search-github-usernames', event => {
      event.preventDefault();
      let username = event.target.username.value;

      // add each repo to the repository store
      api.getRepositories(username)
        .then(response => response.forEach(repo => store.addRepo(repo)))
        .catch(error => console.log(error.message));
    });

    render();
  };




  const handleFetchResults = function() {
    
    

  };


  /**
   * 
   * 
   */
  const generateHTMLResults = function() {

    
  };



  const generateRepositoryElementString = function() {
    

    
  };


  /**
   * 
   */
  const setError = function() {

  };



  const generateRenderError = function() {

  
  };
 

  const render = function() {

  };
  
  function initializeListeners() {
    handleSearchInput();
    handleFetchResults();
    generateRepositoryElementString();
    generateHTMLResults();
    setError();
    generateRenderError();
  }




  return {
    initializeListeners,
    render,
  };


})();

