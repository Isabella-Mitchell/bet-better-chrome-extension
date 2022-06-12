document.addEventListener('DOMContentLoaded', () => {
    const dialogBox = document.getElementById('dialog-box');
    const query = { active: true, currentWindow: true };

    chrome.tabs.query(query, (tabs) => {
        dialogBox.innerHTML = title(tabs[0].title);
    });
});

const title = (tabTitle) => {
const currentTitle = `Current: ${tabTitle}`
return currentTitle;
}

