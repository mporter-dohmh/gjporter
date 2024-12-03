import subprocess


def _cmd(command):
    try:
        result = subprocess.run(f"git {command}", capture_output=True, text=True, check=True)
        print(f"git {command}")
        if result.stdout:
            print(result.stdout)
        return result.stdout
    except subprocess.CalledProcessError as e:
        print(f"Error executing command: {e.stderr}")
        return None

def add(filepath):
    return _cmd(f'add "{filepath}"')

def mvtoroot(path):
    return _cmd(f'mv {path} .')

def commit(msg):
    return _cmd(f'commit -m "{msg}"')

def push():
    return _cmd('push origin main')