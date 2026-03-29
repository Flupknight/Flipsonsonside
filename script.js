// Function to create a download link for a file
function createDownloadLink(fileUrl, fileName, linkText) {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.textContent = linkText;
    link.style.display = 'block'; // Make it a block element for visibility
    link.style.margin = '10px 0';
    return link;
}

// Add the download link to the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const downloadContainers = document.querySelectorAll('ul');
    downloadContainers.forEach(container => {
        if (container.dataset.file) {
            const fileName = container.dataset.file;
            const downloadLink = createDownloadLink(fileName, fileName, 'Download ' + fileName);
            const li = document.createElement('li');
            li.appendChild(downloadLink);
            container.appendChild(li);
        }
    });
});