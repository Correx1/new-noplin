const http = require('http');
http.get('http://localhost:3000/services/ui-ux-design', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('STATUS:', res.statusCode);
    if (res.statusCode !== 200) {
       const match = data.match(/<title>(.*?)<\/title>/);
       if (match) console.log('TITLE:', match[1]);
    } else {
       console.log('STATUS OK - 200');
    }
  });
}).on('error', err => console.error(err.message));
