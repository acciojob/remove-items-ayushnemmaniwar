//your JS code here. If required.
document.getElementsByTagName("input")[0].addEventListener("click", function() {
    const selectedItem = document.getElementById("colorSelect")
    if (selectedItem.selectedIndex !== -1) {
        selectedItem.remove(selectedItem.selectedIndex);
    }
}) 