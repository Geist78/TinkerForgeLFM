const { app, brickManager } = require('./Api');
const config = require('./config.json');

const HOST = process.env.HOST || config.server.host || '0.0.0.0';
const PORT = process.env.PORT || config.server.port || 3000;
const NETWORK_HOST = process.env.PUBLIC_HOST || config.tinkerforge?.ip || HOST;

// Graceful shutdown
let isShuttingDown = false;

const gracefulShutdown = () => {
  if (isShuttingDown) return;
  isShuttingDown = true;

  console.log('\n🛑 Shutting down gracefully...');
  
  server.close(async () => {
    try {
      await brickManager.disconnect();
      console.log('✅ Shutdown complete');
      process.exit(0);
    } catch (error) {
      console.error(`❌ Error during shutdown: ${error.message}`);
      process.exit(1);
    }
  });

  // Force shutdown after 10 seconds
  setTimeout(() => {
    console.error('⏱️  Forced shutdown after 10 seconds');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

// Start server
const server = app.listen(PORT, HOST, async () => {
  console.log(`\n🚀 TinkerForge LFM Server`);
  console.log(`📍 Listening on ${HOST}:${PORT}`);
  console.log(`🔗 Local:   http://localhost:${PORT}`);
  console.log(`🔗 Network: http://${NETWORK_HOST}:${PORT}\n`);

  // Initialize all devices
  try {
    await brickManager.initialize();
    console.log('\n✨ Server ready for requests!');
  } catch (error) {
    console.error(`\n❌ Failed to initialize devices: ${error.message}`);
    console.log('⚠️  Server still running, some features may be unavailable');
  }
});

// Handle errors
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use`);
  } else {
    console.error(`❌ Server error: ${error.message}`);
  }
  process.exit(1);
});

console.log('⏳ Server starting up...');
