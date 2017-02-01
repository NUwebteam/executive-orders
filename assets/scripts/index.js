$(document).ready(function() {
  var html = '';
  $.get("./issues-test.csv", function(data) {
  // $.get("https://docs.google.com/spreadsheets/d/1oR8e73bZpJQNbPCJUSFivWm7APX7mSknnKTQg7DLSgA/pub?output=csv", function(data) {
    var issues = $.csv.toObjects(data);

    var renderTemplate = function(issues) {
      var ret = '';
      for (var i = 0; i < issues.length; i++) {
        if (issues[i].overline) {
          ret += '<div class="content-issue-container">';
          ret += '<h2>'+issues[i].overline+'</h2>';
        } else if (issues[i].overline === '' && issues[i].source === '') {
          ret += '</div>';
        } else {
          ret += '<div class="issue-content-container">';
          ret += '<a class="issue-content-link" href="'+issues[i].link+'" target="_blank">';
          ret += '<div class="issue-content">';
          ret += '<h3>'+issues[i].title+'</h3>';
          ret += '<h5> <span class="issue-date">'+issues[i].date+'</span> -- '+issues[i].source+' </h5>';
          ret += '</div>';
          ret += '</a>';
          ret += '</div>';
        }
      }
      return ret;
    };
    html += renderTemplate(issues);
    $('#content-template').html(html);
  });
});

// module.exports = true;
