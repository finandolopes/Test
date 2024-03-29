function openSection(sectionName) {
  var i, sections;
  sections = document.getElementsByClassName("section");
  for (i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  document.getElementById(sectionName).style.display = "block";
}
