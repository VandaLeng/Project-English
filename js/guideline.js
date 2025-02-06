function toggleAccordion(element) {
    let content = element.nextElementSibling;
    let arrow = element.querySelector('.arrow');

    // Toggle content visibility
    if (content.style.display === "block") {
        content.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    } else {
        content.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
    }
}

function toggleDetail(element) {
    let detail = element.querySelector('.step-detail');
    let allDetails = document.querySelectorAll('.step-detail');

    // Close all other details before opening the selected one
    allDetails.forEach(d => {
        if (d !== detail) d.style.display = "none";
    });

    // Toggle the clicked step
    detail.style.display = detail.style.display === "block" ? "none" : "block";
}
