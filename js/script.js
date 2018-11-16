
function GitViewModel() {
  this.lastCommit = ko.observable();
  this.lastCommit = '2018';

  var self = this;
  $.getJSON("https://api.github.com/repos/thanhj/thanhj.github.io/commits", function(data) {
      if (data && data.length > 0){
        self.lastCommit = moment().format(data[0].commit.committer.date);
      }
  });
}

// Activates knockout.js
ko.applyBindings(new GitViewModel());
