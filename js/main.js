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
const tabLink = document.querySelectorAll(".tab-link");
const tabContent = document.querySelectorAll(".tab-content");

function showPanel(index, color) {
    tabLink.forEach(item => {
        item.style.color = "";
        item.style.borderBottomColor = "";
    });
    tabContent.forEach(item => {
        item.style.display = "none";
    });
    tabLink[index].style.color = color;
    tabLink[index].style.borderBottomColor = color;
    tabContent[index].style.display = "block";
}

showPanel(0,'#f36');
