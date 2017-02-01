'use strict';

let issues= require('issues-array');

let renderTemplate = function(issues) {

    let ret = '';

    ret += '<div class="content-wrapper">';
      for (var i = 0; i < issues.length; i++) {
      ret += '<div class="content-issue-container">';
      if (issues[i].issue_overline) {
          ret += '<h2>'+issues[i].issue_overline+'</h2>';
      } else {
        ret += '<div class="issue-content-container">';
        ret += '<a class="issue-content-link" href="'+issues[i].issue_link+'" target="_blank">';
        ret += '<div class="issue-content">';
        ret += '<h3>'+issues[i].issue_title+'</h3>';
        ret += '<h5> <span class="issue-date">'+issues[i].issue_date+'</span> -- '+issues[i].issue_source+' </h5>';
        ret += '</div>';
        ret += '</a>';
        ret += '</div>';
        ret += '</div>';
      }
    ret += '</div>';
    }
    return ret;
};

module.exports = {
  renderTemplate,
};
