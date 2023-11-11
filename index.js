const http = require('http');

// const todos = [
    // { id:1, text: 'Todo One' },
    // { id:2, text: 'Todo Two' },
    // { id:3, text: 'Todo Three' },
// ];

const server = http.createServer((req, res) => {
    // console.log(req);
    // const { headers, url, method } = req;
    // console.log('headers', headers);
    // console.log('url', url);
    // console.log('method', method);

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('X-Powered-By', 'Node.js');

    res.writeHead(404, {
        'Content-Type': 'application/json',
        'X-Powered-By': 'Node.js',
    });

    // const data = JSON.stringify({
    //     success: true,
    //     data:todos,
    // })
    let body = [];

    req
    .on('data', chunk => {
        body.push(chunk);
    })
    .on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body);
    });

const data = JSON.stringify({
    success: true,
    error: 'Not Found',
    data: null,
});

    res.end(data);
});

const PORT = 5000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));