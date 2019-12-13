// Navbar Active
$(window).scroll(function() {
    var winScroll = $(this).scrollTop();
    if (winScroll >= 110) {
        $("nav").addClass("header-active");
    } else {
        $("nav").removeClass("header-active");
    }
});

$(document).ready(function() {
    //Animate Click Scroll

    var scrollLink = $(".scroll");

    scrollLink.click(function(e) {
        e.preventDefault();

        $("body,html").animate(
            {
                scrollTop: $(this.hash).offset().top - 100
            },
            1000
        );
    });
});

// Tab Panel
const curriculumTabLink = document.querySelectorAll(".curriculum-tab .tab-link");
const curriculumTabContent = document.querySelectorAll(".curriculum-content .tab-content");
const toolsTabLink = document.querySelectorAll(".tools-tab .tab-link");
const toolsTabContent = document.querySelectorAll(".tools-content .tab-content");
function showPanel(index, color) {
    curriculumTabLink.forEach(item => {
        item.style.color = "";
        item.style.borderBottomColor = "";
    });
    curriculumTabContent.forEach(item => {
        item.style.display = "none";
    });
    curriculumTabLink[index].style.color = color;
    curriculumTabLink[index].style.borderBottomColor = color;
    curriculumTabContent[index].style.display = "block";
}

function showToolsPanel(index,color){
    toolsTabLink.forEach(item => {
        item.style.color = "";
        item.style.borderBottomColor = "";
    });
    toolsTabContent.forEach(item => {
        item.style.display = "none";
    });
    toolsTabLink[index].style.color = color;
    toolsTabLink[index].style.borderBottomColor = color;
    toolsTabContent[index].style.display = "block";
}
showPanel(0,'#f36');
showToolsPanel(0,'#f36');