from flask import Flask, render_template
from datetime import datetime, timedelta

app = Flask(__name__)

from datetime import datetime, timedelta

def get_active_lights():
    # Første søndag i advent 2024
    first_advent = datetime(2024, 12, 1)
    today = datetime.now()
    #today = datetime(2024,12,24)
    active_lights = []
    
    # Initialize week counter
    week = 0
    
    # Loop until 4 lights are checked
    while week < 4:
        advent_date = first_advent + timedelta(weeks=week)
        if today >= advent_date:
            active_lights.append(week + 1)  # Add active light number (1-4)
        week += 1  # Increment week counter

    return active_lights



@app.route('/')
def home(name=None):
    return render_template('home.html', name=name)

@app.route('/about')
def about(name=None):
    return render_template('about.html', name=name)

@app.route('/content')
def content(name=None):
    return render_template('content.html', name=name)

@app.route('/test2')
def test2(name=None):
    return render_template('test2.html', name=name)

@app.route('/pictures')
def pictures(name=None):
    return render_template('pictures.html', name=name)

@app.route('/unturned')
def unturned(name=None):
    return render_template('unturned.html', name=name)

@app.route('/unturned/range')
def range(name=None):
    return render_template('unturnedrange.html', name=name)

@app.route('/unturned/airdrop')
def airdrop(name=None):
    return render_template('unturnedairdrop.html', name=name)

@app.route('/minecraft')
def minecraft():
	with open('test.txt', 'r') as f: 
		return render_template('minecraft.html', text=f.read()) 
     
@app.route('/adventslys')
def adventslys():
    active_lights = get_active_lights()
    return render_template("adventslys.html", active_lights=active_lights)
    

if __name__ == '__main__':
    app.run(debug=False)