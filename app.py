from flask import Flask, request, render_template


@app.route('/')
def index():

    return render_template('index.html')

@app.route('/st4rt.html', methods=['GET', 'POST'])
def st4rt():

    user_check = False
    pass_check = False
    return_message = "Invalid Credentials."

    if request.method == "POST":

        username = request.form["username"]
        password = request.form["password"]

        if username == "6.213770":
            user_check = True

        if password == "31.568054":
            pass_check = True

        if user_check == True and pass_check == True:
            return_message = "wishing_wellcome4"

    return render_template('st4rt.html', return_message=return_message)


