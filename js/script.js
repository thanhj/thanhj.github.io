$(function() {
  function GitViewModel() {
    this.lastCommit = ko.observable();
    this.commitTitle = ko.observable();
    this.commitLink = ko.observable();

    var self = this;
    $.getJSON("https://api.github.com/repos/thanhj/thanhj.github.io/commits", function(data) {
        if (data && data.length > 0){
          var latestChange = data[0];
          var title = "Change: " + latestChange.commit.message + ' | By ' + latestChange.commit.committer.name;
          self.commitTitle(title);
          self.commitLink(latestChange.html_url);
          self.lastCommit(moment(latestChange.commit.committer.date).format('ll'));
        }
    });
  }
  // Activates knockout.js
  ko.applyBindings(new GitViewModel());
});
