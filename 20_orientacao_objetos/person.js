function Pen() {
    this.color = '';

    this.getColor = function() {
        return this.color;
    };

    this.setColor = function(_color) {
        this.color = _color;
    };

    this.getMani = function() {
        this.getManifecturer();
    };
}

Pen.manufecturer = 'Bic';

Pen.setManifecturer = function(_manifecture) {
    this.manufecturer = _manifecture;
};

Pen.getManifecturer = function() {
    return this.manufecturer;
};

Pen.setManifecturer('Bic');

// /console.log(Pen.getManifecturer()); // error

var pen = new Pen();
console.log(pen.getMani());