import subprocess
import os

class Repo(object):
    def __init__(self, path):
        self.path = path

    def _cmd(self, command):
        try:
            os.chdir(self.path)
            result = subprocess.run(f"git {command}", capture_output=True, text=True, check=True)
            print(f"git {command}")
            if result.stdout:
                print(result.stdout)
            return result.stdout
        except subprocess.CalledProcessError as e:
            print(f"Error executing command: {e.stderr}")
            return None

    def relativepath(self, path):
        if path.startswith(self.path):
            return self.path[len(self.path)+1:]
        return path

    def add(self, filepath):
        return self._cmd(f'add "{filepath}"')

    def mvtoroot(self, path):
        return self._cmd(f'mv {path} .')

    def commit(self, msg):
        return self._cmd(f'commit -m "{msg}"')

    def push(self):
        return self._cmd('push origin main')