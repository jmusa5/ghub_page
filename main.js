


//==================================================
// (function(){
//
//   var baseurl = "https://api.github.com/users/jmusa5/";
//
// $(document).ready(function(){
//   if(typeof githubToken !== 'undefined'){
//   $.ajaxSetup({
//     headers: { 'Authorization': 'token.js' + githubToken }
//   });
// }
//
//
//
//
// var repoTemplate = _.template($('[data-template-name=repo]').text());
//     var $repositoriesUl = $('.repositories');
//
//     $.ajax(baseUrl + "repos").done(function(repos){
//       _.each(repos, function(repo) {
//         $repositoriesUl.append(repoTemplate(repo));
//       });
//     });
//   });
//
// })();

//==================== Had to comment out broken JS




//   var userResults = rawUserData.results; // figure out what i need here using the console.
//   var repoResults = rawRepoData.results;
//
//   // $(document).ready(function(){ // runs the function on document ready
//   //
//   //   var $list = $('.results-list'); // targets div with class gorilla in the html
//   //
//   //   var $search = $('.search');
//   //
//   //   results.forEach(function(gorilla){
//   //     var gorillaText = renderTemplate('gorilla-item', {
//   //       name: gorilla.title,
//   //       price: gorilla.price,
//   //       image: gorilla.Images[0].url_170x135,
//   //       currency: gorilla.currency_code,
//   //       shop: gorilla.Shop.shop_name,
//   //     });
//   //     $list.append(gorillaText);
//   //   });
//   // });
//
//     function renderTemplate(name, data) {
//       var $template = $('[data-template-name=' + name + ']').text();
//       $.each(data, function(prop, value) {
//         $template = $template.replace('<% ' + prop + ' %>', value);
//       });
//       return $template;
//     }
//
// })();
