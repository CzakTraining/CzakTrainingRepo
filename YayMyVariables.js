alloy("configure", {
    "edgeConfigId": "2391a9a9-19da-4e64-bc42-5009a9ab1b8d",
    "orgId": "53A16ACB5CC1D3760A495C99@AdobeOrg"
});

alloy("sendEvent", {

    "xdm": {
        "web": {
            "webPageDetails": {
                "URL": window.document.URL,
                "name": window.document.title
            }
        },
        "_experience": {
            "analytics": {
                "customDimensions": {
                    "eVars": {
                        "eVar1": "Czak Web SDK 2",
                        "eVar2": "Hey it's a random word"
                    }
                }
            }
        }
    }
});

