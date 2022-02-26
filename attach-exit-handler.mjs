const attachExitHandler = async (callback) => {
    process.once('cleanup', async() => {
      await callback();
    });
    process.once('exit', async () => {
      process.emit('cleanup');
    });
    process.on('SIGINT', async () => {
      process.emit('cleanup');
    });
    process.on('SIGTERM', async () => {
      process.emit('cleanup');
    });
    process.on('uncaughtException', async () => {
      process.emit('cleanup');
    });
};

export { attachExitHandler };