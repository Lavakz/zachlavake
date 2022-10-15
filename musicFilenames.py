import glob

names = glob.glob("public_html/music/*");
for name in names:
    print("\"" + name.replace("public_html/music\\", "") + "\", ");


