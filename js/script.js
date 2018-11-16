$(function() {
  function GitViewModel() {
    this.lastCommit = ko.observable();
    this.commitTitle = ko.observable();
    this.commitLink = ko.observable();

    var self = this;
    $.getJSON("https://api.github.com/repos/thanhj/thanhj.github.io/commits", function(data) {
        if (data && data.length > 0){
          var lastCommit = data[0].commit;
          var title = "Change: " + lastCommit.message + ' | By ' + lastCommit.committer.name;
          self.commitTitle(title);
          self.commitLink(lastCommit.url);
          self.lastCommit(moment(lastCommit.committer.date).format('ll'));
        }
    });
  }
  // Activates knockout.js
  ko.applyBindings(new GitViewModel());
});
