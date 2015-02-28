// new instance of the GitHub constructor, with my name as the parameter
var github = new Github("mewilkerson");

// this pulls in all the data from the github APIs, then performs the
// functions below when data is ready

github.loadAll( function(data){
  var repos = data.repos;
  var orgs = data.orgs;
  var starred = data.starred;
  var user = data.user;


  var $rc = $(".repos-container");
  $rc.empty();
  var html = JST.repo(repos[0]);
  $rc.append(html);
 
// change time stuff

  var $profile = $(".handlebar-profile");
  $profile.empty();
  user.totalStars = starred.length;
  var code = JST.profile(user);
  $profile.append(code);

  var $organs = $(".organizations")
  $organs.empty();
  var orgCode = JST.organizations(orgs[0]);
  $organs.append(orgCode);

});
