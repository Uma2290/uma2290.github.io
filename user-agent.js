const userInfo = `
User Agent: ${navigator.userAgent}

Platform: ${navigator.platform}

Referrer: ${document.referrer || 'Direct visit'}

Language: ${navigator.language}

Screen Resolution: ${window.screen.width}x${window.screen.height}
`;

alert(userInfo);
