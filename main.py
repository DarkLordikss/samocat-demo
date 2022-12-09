from flask import Flask, render_template


app = Flask(__name__)


@app.route("/")
def first_page():
    return render_template('index.html')


@app.route("/second_page")
def second_page():
    return render_template('3-2.html')


if __name__ == "__main__":
    app.run()
