$(document).ready(function() {
  console.log('test');
// let template = require('template-framework');
// var issues = [
//   {
//     issue_overline: 'Campus Communications',
//   },
//   {
//     issue_source: 'President Joseph Aoun',
//     issue_title: 'Students not able to return to their universities',
//     issue_link: 'http://www.neu.edu',
//     issue_date: '2/1/2017',
//   },
//   {
//     issue_source: 'Washington Post',
//     issue_title: 'Reform on immigration',
//     issue_link: 'http://www.apple.com',
//     issue_date: '1/31/2017',
//   },
//   {
//     issue_source: 'Office of Registrar',
//     issue_title: 'Trump banning all refugees from entering the untited states',
//     issue_link: 'http://www.google.com',
//     issue_date: '1/30/2017',
//   }
// ];

// var renderTemplate = function() {
//     var ret = '';
//
//     ret += '<div class="content-wrapper">';
//       for (var i = 0; i < issues.length; i++) {
//       ret += '<div class="content-issue-container">';
//       if (issues[i].issue_overline) {
//           ret += '<h2>'+issues[i].issue_overline+'</h2>';
//       } else {
//         ret += '<div class="issue-content-container">';
//         ret += '<a class="issue-content-link" href="'+issues[i].issue_link+'" target="_blank">';
//         ret += '<div class="issue-content">';
//         ret += '<h3>'+issues[i].issue_title+'</h3>';
//         ret += '<h5> <span class="issue-date">'+issues[i].issue_date+'</span> -- '+issues[i].issue_source+' </h5>';
//         ret += '</div>';
//         ret += '</a>';
//         ret += '</div>';
//         ret += '</div>';
//       }
//     ret += '</div>';
//     }
//     return ret;
// };

// var getIssues = function() {
//   $.get('https://docs.google.com/spreadsheets/d/1oR8e73bZpJQNbPCJUSFivWm7APX7mSknnKTQg7DLSgA/pub?output=csv', function(data) {
//     console.log(data);
//     var issues = $.csv.toObjects(data);
//     console.log(issues);
//   });
// };

  // let html = '';
  // $.get('https://docs.google.com/spreadsheets/d/1oR8e73bZpJQNbPCJUSFivWm7APX7mSknnKTQg7DLSgA/pub?output=csv', function(data) {
  //   var issues = $.csv.toObjects(data);
  //   console.log(issues);
  // });
  // html += renderTemplate(issues);
  // $('#content-template').html(html);
});
