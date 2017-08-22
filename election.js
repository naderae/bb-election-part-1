document.addEventListener("DOMContentLoaded", function() {



      $.ajax({
      url: 'https://bb-election-api.herokuapp.com/',
      method: 'GET',
      dataType: 'json'
    }).done(function(responseData){
        responseData.candidates.forEach(function(candidate){
          var individualCandidate = document.createElement('li')
          individualCandidate.innerHTML = candidate.name + " with " + candidate.votes + " votes"
          document.getElementById('list-of-candidates').append(individualCandidate)
        })
      });
});
