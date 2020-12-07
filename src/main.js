function myDomain() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big", "amazing", "wonderful"];
  var noun = ["jogger", "raccoon", "dragon", "monkey", "pig", "chicken"];
  var dot = [".com", ".io", ".org"];
  for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
      for (var k = 0; k < noun.length; k++) {
        for (var l = 0; l < dot.length; l++) {
          document.querySelector(".domain").innerHTML +=
            "<li>" + pronoun[i] + adj[j] + noun[k] + dot[l] + "</li>";
        }
      }
    }
  }
}
document.querySelector(".btn").addEventListener("click", myDomain);
