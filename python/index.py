import sys
import os

# Check for a specific environment variable or command-line argument
def is_invoked_from_js():
    return os.getenv("RUN_FROM_JS") == "1"

# Function to handle incoming data
def handle_input():
    for line in sys.stdin:
        if line.strip() == "exit":
            print("Exiting")
            sys.stdout.flush()
            break
        print(f"Received: {line.strip()}")
        sys.stdout.flush()

if __name__ == "__main__":
    if is_invoked_from_js():
        print("Python script started\n")
        sys.stdout.flush()
        handle_input()