export default defineEventHandler((event) => {
  const { req, res } = event.node
  const url = req.url;
  const index = url.length - 1;
  if (url[index] === '/') {
    res.writeHead(301, { Location: url.slice(0, index) });
    res.end();
  }
});
