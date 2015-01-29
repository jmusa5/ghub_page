<script type="text/template" data-template-name="name-template">  //-----on html
  <h2 class="<%= name%>">
    <%= name%>
  </h2>
</script>



var templateString=$('[data-template-name-name]').text();
var nameTemplate= _.template(templateString);


var nameTemplate = ("<h1> <%= name %></h1>");
$('body').append(nameTemplate({name: "John Mendelsohn"}));
$('body').append(nameTemplate({name: "Finn"}));

_.each(["Jake Smith", "Finn"], function(name){
  $('body').append(nameTemplate({name:name}));
})




var john="<h1>John Mendelsohn</h1>";
$('body').append(john);

var finn = "<h1>finn</h1>";
$('body').append(finn);



var
if()
console.log



(function(){

  var baseurl = "http://api.github.com/user ....";

  $(document).ready(function(){
    $.ajax(baseurl + "repos").done(function(data){
      _.each(repos, function(repo){
        console.log(repo.name, repo.pushed_at, repo.language, repo.stargazers_url.......);
      console.log(data);

    })
      })
});
})();


var promise ={
  done:function(donecallback){};
  fail: function(failurecallback){};
  then: function()

}

<script type="text/template">
  <%= name %>
  <%= pushed_at %>
