const { spawn } = require('child_process');

// Path to the executable file
const filePath = '.\\python\\dist\\index.exe';

// Spawn the Python process with the environment variable set
const pythonProcess = spawn(filePath, {
    env: { ...process.env, RUN_FROM_JS: "1" }
});

// Listen for data from the Python script
pythonProcess.stdout.on('data', (data) => {
    console.log(`Python says: ${data}`);
});

// Listen for errors
pythonProcess.stderr.on('data', (data) => {
    console.error(`Python error: ${data}`);
});

// Handle when the Python script closes
pythonProcess.on('close', (code) => {
    console.log(`Python process exited with code ${code}`);
});

// Function to send data to Python
function sendToPython(message) {
    pythonProcess.stdin.write(message + '\n');
}

// Send an initial message to Python
sendToPython('Hello from Node.js!');

// Example of sending more messages
setTimeout(() => {
    sendToPython('This is another message');
}, 2000);

setTimeout(() => {
    sendToPython('exit');
}, 4000);
