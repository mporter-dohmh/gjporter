import git
import os

def movetoroot(path):
    git.mvtoroot(path)
    git.add(path)
    git.commit(f"moved folder {path}")
    git.push()


def main():
    root = r"C:\Users\mporter1\Documents\gjporter"
    publichtml = os.path.join(root, "public_html")
    os.chdir(root)
    for d in os.listdir(publichtml):
        fullpath = os.path.join(publichtml, d)
        if not d.startswith(".") and os.path.isdir(fullpath):
            print ("moving {os.path.join('public_html',d)}")
            movetoroot(os.path.join("public_html",d))