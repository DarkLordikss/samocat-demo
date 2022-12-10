from flask import Flask, render_template


app = Flask(__name__)


@app.route("/")
def first_page():
    return render_template('index.html')


@app.route("/epic_1")
def second_page():
    return render_template('epic_1.html')


@app.route("/epic_1/quest_1")
def third_page():
    return render_template('quest_1.html')


@app.route("/achive")
def fourth_page():
    return render_template('achive.html')


@app.route("/help")
def help():
    return render_template('help.html')


if __name__ == "__main__":
    app.run(debug="on")
