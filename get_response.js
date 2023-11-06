async function getResponse(url) {
    return new Promise((resolve,reject)=>{

        var req = new XMLHttpRequest();
        req.responseType = 'json';
        req.open('GET', url, true);
        req.onload = function() {
            resolve(req.response);
        };
        req.onerror = function() {
            reject(req.responseText);
        }
        req.send(null);

    })
}

async function main(url) {
    await getResponse(url);
}

main('http://url...');
