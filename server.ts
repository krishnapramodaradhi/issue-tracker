import app from './src/app';

const server = Bun.serve({
 port: process.env.PORT,
 fetch: app.fetch
});

console.log(`Server running on http://${server.hostname}:${server.port}`)