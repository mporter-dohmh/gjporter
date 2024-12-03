import git
import os



def main():
    repo = git.Repo(r"C:\Users\mporter1\Documents\gjporter")
    publichtml = os.path.join(repo.path, "public_html")
    for d in os.listdir(publichtml):
        fullpath = os.path.join(publichtml, d)
        if not d.startswith(".") and os.path.isdir(fullpath):
            relpath = os.path.join('public_html',d)
            print (f"moving {relpath}")
            repo.mvtoroot(path)
            repo.add(path)
            repo.commit(f"moved folder {path}")
            repo.push()